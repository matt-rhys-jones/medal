const gulp = require('gulp');
const Server = require('karma').Server;

/**
 * Run test once and exit
 */
gulp.task('test:js', function (done) {
  new Server({
    configFile: __dirname + '/../karma.conf.js',
    singleRun: true
  }, () => {
    done() 
  }).start();
});

gulp.task('test:js:tdd', function (done) {
  new Server({
    configFile: __dirname + '/../karma.conf.js',
    singleRun: false
  }, () => {
    done()
  }).start();
});

gulp.task('test', ['test:js']);
