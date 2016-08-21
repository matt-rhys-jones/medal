import paths from '../../config/paths';
import deploy from '../../config/deploy';

const gulp = require('gulp');
const scp = require('gulp-scp2');
const fs = require('fs');

gulp.task('deploy:scp', () => {
  const glob = paths.dist.root + '**/*';
  const scpConfig = {
    host: deploy.scp.host,
    port: deploy.scp.port,
    username: deploy.scp.username,
    privateKey: fs.readFileSync(deploy.scp.privateKey),
    passphrase: deploy.scp.passphrase,
    dest: deploy.scp.destination
  }

  return gulp.src(glob)
    .pipe(scp(scpConfig))
    .on('error', () => {
      console.log(err);
    });
});
