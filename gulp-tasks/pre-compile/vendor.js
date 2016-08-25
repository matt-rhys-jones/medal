import './vendor/highlight';
import './vendor/skeleton';
 
const gulp = require('gulp');

gulp.task('pre-compile:vendor', ['pre-compile:vendor:skeleton', 'pre-compile:vendor:highlight']);
