import './compile/templates';
import './compile/less';
import './compile/images';

const gulp = require ('gulp');

gulp.task('compile', ['compile:templates', 'compile:less', 'compile:images']);
