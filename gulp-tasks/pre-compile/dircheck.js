import paths from '../../config/paths';
const fs = require('fs');
const gulp = require('gulp');

gulp.task('pre-compile:dircheck', (done) => {
  function maybeMakeDir(dir) {
    try {
      fs.accessSync(dir);
    } catch(e) {
      fs.mkdirSync(dir);
    }
  }

  maybeMakeDir(paths.articles.draft.root);
  maybeMakeDir(paths.articles.publish.root);
  done();
});
