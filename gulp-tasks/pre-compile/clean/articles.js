import paths from '../../../config/paths.js';

const gulp = require('gulp');
const del = require('del');

gulp.task('pre-compile:clean:articles', () => {
  return del.sync(paths.app.articles);
});
