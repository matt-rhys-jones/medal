import paths from '../../../config/paths.js';

const gulp = require('gulp');
const del = require('del');

gulp.task('pre-compile:clean:dist', () => {
  return del.sync(paths.dist.root);
});
