import paths from '../../config/paths';
import TagFactory from '../../medal/js/src/modules/tag-factory/tag-factory';
import ArticleFactory from '../../medal/js/src/modules/article-factory/article-factory';
import TemplateContext from '../../medal/js/src/models/template-context';

const gulp = require('gulp');
const nunjucks = require('gulp-nunjucks');
const data = require('gulp-data');
const marked = require('gulp-marked');
const frontMatter = require('gulp-front-matter');
const wrap = require('gulp-wrap');
const highlight = require('highlight.js');
const flatten = require('gulp-flatten');

const fs = require('fs');
const path = require('path');

const articleIndex = [];
const tagIndex = [];
const indexedTagNames = [];

gulp.task('compile:templates:articles', ['pre-compile'], () => {
  const glob = [];
  const markedConfig = {
    highlight: (article) => {
      return highlight.highlightAuto(article).value;
    }
  };
  const articleTemplateWrapper = '{% extends "article.html" %}{% block article %}<%= contents %>{% endblock %}';

  function indexArticle(file) {
    articleIndex.push(ArticleFactory.createArticle(file));
  }

  function indexTags(file) {
    if (!file.frontMatter.tags) {
      return;
    }

    for (const tagName of file.frontMatter.tags) {
      if (indexedTagNames.indexOf(tagName) === -1) {
        tagIndex.push(TagFactory.createTag(tagName))
        indexedTagNames.push(tagName);
      }
    }
  }

  function maybeMakeDir(dir) {
    try {
      fs.accessSync(dir);
    } catch(e) {
      fs.mkdirSync(dir);
    }
  }

  function maybeMakeFile(path, content) {
    try {
      fs.accessSync(path);
    } catch(e) {
      fs.writeFileSync(path,content);
    }
  }
  
  function createTagTemplates(file) {
    if (!file.frontMatter.tags) {
      return;
    }

    for (const tagName of file.frontMatter.tags) {
      const dir = path.join(paths.app.layout, 'tags');
      const filepath = path.join(paths.app.layout, paths.template.tags, tagName + '.html');
      const template = '{% extends "tag.html" %}{% from "macros/tag.html" import tag %}{% block tag %}{{ tag(index, "' + tagName + '") }}{% endblock %}';
      
      maybeMakeDir(dir);
      maybeMakeFile(filepath, template);
    }
  }

  if (process.env.NODE_ENV === 'development') {
    glob.push(paths.articles.draft.root + '/**/*.md');
  }

  glob.push(paths.articles.publish.root + '/**/*.md');

  return gulp.src(glob)
    .pipe(frontMatter({ remove: true }))
    .pipe(data(indexArticle))
    .pipe(data(indexTags))
    .pipe(data(createTagTemplates))
    .pipe(marked(markedConfig))
    .pipe(wrap(articleTemplateWrapper))
    .pipe(flatten())
    .pipe(gulp.dest('app/layout/articles'));
});

/*
 * Uses the article index, and tag index to generate a template context object to pass to the template engine
 */
gulp.task('compile:templates', ['pre-compile', 'compile:templates:articles'], () => {
  const glob = [];
  const templateContext = new TemplateContext(
    articleIndex,
    tagIndex
  );

  glob.push(paths.app.layout + '/**/*.html');
  glob.push('!' + paths.app.layout + '/base.html');
  glob.push('!' + paths.app.layout + '/macros/**/*.html');
  gulp.src(glob)
    .pipe(nunjucks.compile(templateContext))
    .pipe(gulp.dest('dist'))
});
