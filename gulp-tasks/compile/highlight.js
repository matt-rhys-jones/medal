import paths from '../../config/paths';

const gulp = require('gulp');
const copy = require('gulp-copy');

gulp.task('compile:highlight', () => {
  const glob = '**/*.css';

  return gulp.src(glob, { cwd: 'node_modules/highlight.js/styles' })
    .pipe(copy(paths.dist.css + '/highlight'));
});
