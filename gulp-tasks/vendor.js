import paths from '../config/paths.js';

const gulp = require('gulp');
const copy = require('gulp-copy');

gulp.task('vendor:skeleton', () => {
  const glob = [];
  glob.push('**/*.css');

  return gulp.src(glob, {cwd: 'node_modules/skeleton-css/css'})
    .pipe(gulp.dest(paths.dist.css));
});
 
gulp.task('vendor', ['vendor:skeleton']);
