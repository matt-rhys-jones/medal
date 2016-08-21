import './gulp-tasks/pre-compile';
import './gulp-tasks/compile';
import './gulp-tasks/post-compile';
import './gulp-tasks/deploy';
import './gulp-tasks/utility/lint';
import './gulp-tasks/utility/test';

const gulp = require('gulp');

gulp.task('build', ['pre-compile', 'compile', 'post-compile']);
