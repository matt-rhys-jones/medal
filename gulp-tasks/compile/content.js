import paths from '../../config/paths';

const gulp = require('gulp');
const marked = require('gulp-marked');
const frontMatter = require('gulp-front-matter');
const wrap = require('gulp-wrap');
const highlight = require('highlight.js');

// configure frontMatter to remove the YAML front matter from files
const frontMatterConfig = {
  remove: true
};

// tell marked parser to use highlightjs when parsing into HTML
const markedConfig = {
  highlight: (content) => {
    return highlight.highlightAuto(content).value;
  }
};

const glob = [];

glob.push(paths.content.root + '**/*.md');

/*
 * This task performs the following operations to the markdown content files
 * 
 * 1. Removes front matter
 * 2. Parsed via 'marked' to convert to html
 * 3. Wraps in a nunjucks template so that it can be parsed by compile:nunjucks task
 * 4. Places the new templates into app/layout/* 
 */
gulp.task('compile:content', function() {
  return gulp.src(glob)
    .pipe(frontMatter(frontMatterConfig))
    .pipe(marked(markedConfig))
    .pipe(wrap('{% extends "base.html" %}{% block content %}<%= contents %>{% endblock %}'))
    .pipe(gulp.dest('app/layout'));
});
