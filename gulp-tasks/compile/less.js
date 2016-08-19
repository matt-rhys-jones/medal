import paths from '../../config/paths';

const gulp = require('gulp');
const less = require('gulp-less');
const sourcemaps = require('gulp-sourcemaps');
const path = require('path');

gulp.task('compile:less', ['pre-compile'], () => {
  const glob = [];
  const env = process.env.NODE_ENV;
  const config = {
    paths: [ path.join(__dirname, 'less', 'includes') ]
  };

  glob.push(paths.app.css + '**/*.less');

  if (env === 'production') {
    return gulp.src(glob)
      .pipe(less(config))
      .pipe(gulp.dest('dist'));
  }

  return gulp.src(glob)
    .pipe(sourcemaps.init())
    .pipe(less(config))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'));
});
