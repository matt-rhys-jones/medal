import './compile/nunjucks';
import './compile/less';
import './compile/content';
import './compile/highlight';

const gulp = require ('gulp');

gulp.task('compile', ['clean', 'compile:nunjucks', 'compile:less', 'compile:content', 'compile:highlight']);
