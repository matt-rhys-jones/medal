import paths from '../../../config/paths';

const gulp = require('gulp');

gulp.task('pre-compile:vendor:skeleton', () => {
  const glob = [];
  glob.push('**/*.css');

  return gulp.src(glob, {cwd: 'node_modules/skeleton-css/css'})
    .pipe(gulp.dest(paths.dist.css));
});
