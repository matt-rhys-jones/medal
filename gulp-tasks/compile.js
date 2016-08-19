import './compile/nunjucks';
import './compile/less';
import './compile/articles';
import './compile/images';

const gulp = require ('gulp');

gulp.task('compile', ['compile:nunjucks', 'compile:less', 'compile:articles', 'compile:images']);
