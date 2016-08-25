import paths from '../../../config/paths.js';

const gulp = require('gulp');
const del = require('del');

gulp.task('pre-compile:clean:tags', () => {
  return del.sync(paths.app.tags);
});
