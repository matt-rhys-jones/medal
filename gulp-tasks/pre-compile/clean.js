import './clean/dist';
import './clean/compiled-content';

const gulp = require('gulp');

gulp.task('pre-compile:clean', ['pre-compile:clean:dist', 'pre-compile:clean:compiled-content']);
