import './clean/dist';
import './clean/articles';
import './clean/tags';

const gulp = require('gulp');

gulp.task('pre-compile:clean', ['pre-compile:clean:dist', 'pre-compile:clean:articles', 'pre-compile:clean:tags']);
