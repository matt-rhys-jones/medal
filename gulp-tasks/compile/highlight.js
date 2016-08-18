import paths from '../../config/paths';

const gulp = require('gulp');
const copy = require('gulp-copy');

const glob = '**/*.css';

gulp.task('compile:highlight', () => {
  return gulp.src(glob, { cwd: 'node_modules/highlight.js/styles' })
    .pipe(copy(paths.dist.css + '/highlight'));
});
