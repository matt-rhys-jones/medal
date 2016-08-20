import paths from '../../config/paths';
import settings from '../../config/settings';
import nunjucksConfig from '../../medal/js/models/nunjucks-config';
import TagAggregator from '../../medal/js/modules/tag-aggregator/tag-aggregator';

const path = require('path');
const gulp = require('gulp');
const nunjucks = require('gulp-nunjucks');
const data = require('gulp-data');
const frontMatter = require('gulp-front-matter');

const fs = require('fs');

nunjucksConfig.paths.css = '/css/min/style.min.css';

gulp.task('compile:index', ['pre-compile'], () => {
  const glob = [];

  glob.push(paths.articles.publish.root + '/**/*.md');

  if (process.env.NODE_ENV === 'development') {
    glob.push(paths.articles.draft.root + '/**/*.md');
  }

  return gulp.src(glob)
    .pipe(frontMatter())
    .pipe(data((file) => {
      nunjucksConfig.index.push({
        metadata: file.frontMatter,
        epoch: new Date(file.frontMatter.date).getTime(),
        path: '/articles/' + path.basename(file.path, '.md') + '.html'
      })
    }))
});

gulp.task('compile:nunjucks', ['compile:articles', 'compile:index'], () => {
  const glob = [];

  glob.push(paths.app.layout + '/**/*.html');
  glob.push('!' + paths.app.layout + '/base.html');
  glob.push('!' + paths.app.layout + '/macros/**/*.html');

  // Tags Task
  nunjucksConfig.tags = TagAggregator.aggregateTagsFromArticleIndex(nunjucksConfig.index);
  
  fs.mkdirSync('app/layout/tags');
  for (let i = 0; i < nunjucksConfig.tags.length; i++) {
    const tagName = nunjucksConfig.tags[i];
    const tagURI = encodeURI(nunjucksConfig.tags[i] + '.html');
    const filename = 'app/layout/tags/' + tagURI;
    fs.writeFileSync(filename, '{% extends "tag.html" %}{% from "macros/article-list.html" import articleList %}{% block tag %}<h1>' + tagName + '</h1>{{ articleList(index, "' + tagName + '") }}{% endblock %}');
  }
  // End Tags Task

  gulp.src(glob)
    .pipe(nunjucks.compile(nunjucksConfig))
    .pipe(gulp.dest('dist'))
});
