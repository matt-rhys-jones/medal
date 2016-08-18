import './compile/nunjucks';
const gulp = require ('gulp');

gulp.task('compile', ['clean', 'compile:nunjucks']);
