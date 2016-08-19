import './compile/nunjucks';
import './compile/less';
import './compile/content';

const gulp = require ('gulp');

gulp.task('compile', ['compile:nunjucks', 'compile:less', 'compile:content']);
