import './compile/nunjucks';
import './compile/less';
import './compile/articles';

const gulp = require ('gulp');

gulp.task('compile', ['compile:nunjucks', 'compile:less', 'compile:articles']);
