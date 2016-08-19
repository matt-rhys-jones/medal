import './clean/dist';
import './clean/articles';

const gulp = require('gulp');

gulp.task('pre-compile:clean', ['pre-compile:clean:dist', 'pre-compile:clean:articles']);
