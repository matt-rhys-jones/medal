import paths from '../../config/paths';

const gulp = require('gulp');
const nunjucks = require('gulp-nunjucks');

const glob = [];

glob.push(paths.app.layout + '/**/*.html');
glob.push('!' + paths.app.layout + '/base.html');

gulp.task('compile:nunjucks', () =>
  gulp.src(glob)
    .pipe(nunjucks.compile())
    .pipe(gulp.dest('dist'))
);
