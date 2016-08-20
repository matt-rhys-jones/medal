import paths from '../../config/paths.js';

const gulp = require('gulp');
const eslint = require('gulp-eslint');
const glob = [];

glob.push(paths.app.root + '/**/*.js');
glob.push(paths.medal.root + '/**/*.js');
glob.push(paths.gulp.root + '/**/*.js');
glob.push(paths.config.root + '/**/*.js');
glob.push('!node_modules/**');

gulp.task('lint:eslint', () => {
  return gulp.src(glob)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});
 
gulp.task('lint', ['lint:eslint']);
