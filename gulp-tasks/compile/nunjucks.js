import paths from '../../config/paths';

const gulp = require('gulp');
const nunjucks = require('gulp-nunjucks');

const config = {
  paths: {
    css: '/css/styles.css'
  }
};

const glob = [];

glob.push(paths.app.layout + '/**/*.html');
glob.push('!' + paths.app.layout + '/base.html');

gulp.task('compile:nunjucks', ['compile:content'], () =>
  gulp.src(glob)
    .pipe(nunjucks.compile(config))
    .pipe(gulp.dest('dist'))
);
