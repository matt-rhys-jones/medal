import './pre-compile/clean';
import './pre-compile/vendor';
import './pre-compile/dircheck';

const gulp = require ('gulp');

gulp.task('pre-compile', ['pre-compile:dircheck', 'pre-compile:clean', 'pre-compile:vendor']);
