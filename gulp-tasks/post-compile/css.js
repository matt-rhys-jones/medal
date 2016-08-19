import paths from '../../config/paths';

const gulp = require('gulp');
const minifyCSS = require('gulp-minify-css');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');

gulp.task('post-compile:css', ['compile'], () => {
  const glob = [];

  glob.push(paths.dist.css + '/normalize.css');
  glob.push(paths.dist.css + '/skeleton.css');
  glob.push(paths.dist.css + '/styles.css');
  glob.push(paths.dist.css + '/highlight/*.css');

  if (process.env.NODE_ENV === 'production') {
    return gulp.src(glob)
      .pipe(minifyCSS())
      .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
      .pipe(concat('style.min.css'))
      .pipe(gulp.dest('dist/css'));
  }

  return gulp.src(glob)
      .pipe(sourcemaps.init())
      .pipe(minifyCSS())
      .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
      .pipe(concat('style.min.css'))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('dist/css/min'));
});
