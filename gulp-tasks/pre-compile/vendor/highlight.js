import paths from '../../../config/paths';
import settings from '../../../config/settings';

const gulp = require('gulp');

gulp.task('pre-compile:vendor:highlight', () => {
  const glob = [];

  if (!settings.features.highlight.enabled) {
    return;
  }

  glob.push(settings.features.highlight.theme + '.css');
  return gulp.src(glob, { cwd: 'node_modules/highlight.js/styles' })
    .pipe(gulp.dest(paths.dist.css + '/highlight'));
});
