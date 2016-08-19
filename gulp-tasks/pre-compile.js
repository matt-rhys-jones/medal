import './pre-compile/clean';
import './pre-compile/vendor';

const gulp = require ('gulp');

gulp.task('pre-compile', ['pre-compile:clean', 'pre-compile:vendor']);
