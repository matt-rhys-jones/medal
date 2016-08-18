import './compile/nunjucks';
import './compile/less';

const gulp = require ('gulp');

gulp.task('compile', ['clean', 'compile:nunjucks', 'compile:less']);
