const gulp = require('gulp');
const Server = require('karma').Server;

// Set environment to test so Babel Istanbul plugin is loaded
const env = process.env.NODE_ENV;
process.env.NODE_ENV = 'test';

gulp.task('test:js', function (done) {

  new Server({
    configFile: __dirname + '/../karma.conf.js',
    singleRun: true
  }, () => {
    process.env.NODE_ENV = env;
    done() 
  }).start();
});

gulp.task('test:js:tdd', function (done) {
  new Server({
    configFile: __dirname + '/../karma.conf.js',
    singleRun: false
  }, () => {
    process.env.NODE_ENV = env;
    done()
  }).start();
});

gulp.task('test', ['test:js']);
