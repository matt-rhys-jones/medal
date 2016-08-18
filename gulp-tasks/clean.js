import paths from '../config/paths.js';

const gulp = require('gulp');
const del = require('del');

gulp.task('clean:dist', () => {
  return del.sync(paths.dist.root);
});

gulp.task('clean', ['clean:dist']);
