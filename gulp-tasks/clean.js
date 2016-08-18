import paths from '../config/paths.js';

const gulp = require('gulp');
const del = require('del');

gulp.task('clean:dist', () => {
  return del(paths.dist.root);
});

gulp.task('clean', ['clean:dist']);
