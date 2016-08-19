import paths from '../../config/paths';

const gulp = require('gulp');

gulp.task('compile:images', ['pre-compile'], () => {
  const glob = [];

  glob.push(paths.app.images + '/**/*');
  return gulp.src(glob)
    .pipe(gulp.dest(paths.dist.images));
});
