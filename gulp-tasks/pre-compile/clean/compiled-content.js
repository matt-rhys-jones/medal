import paths from '../../../config/paths.js';

const gulp = require('gulp');
const del = require('del');

gulp.task('pre-compile:clean:compiled-content', () => {
  return del.sync(paths.app.compiledContent);
});
