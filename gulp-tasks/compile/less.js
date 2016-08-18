import paths from '../../config/paths';

const gulp = require('gulp');
const less = require('gulp-less');
const sourcemaps = require('gulp-sourcemaps');
const path = require('path');
 
const glob = [];

glob.push(paths.app.css + '**/*.less');

gulp.task('compile:less', () => {
  const env = process.env.NODE_ENV;
  const config = {
    paths: [ path.join(__dirname, 'less', 'includes') ]
  }

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
