const gulp = require('gulp');
const Server = require('karma').Server;

// Set environment to test so Babel Istanbul plugin is loaded
const env = process.env.NODE_ENV;

gulp.task('test:js', function (done) {
  process.env.NODE_ENV = 'test';

  new Server({
    configFile: __dirname + '/../../karma.conf.js',
    singleRun: true
  }, (error) => {
    process.env.NODE_ENV = env;
    if (error){
      process.exit(1);
    }
    done();
  }).start();
});

gulp.task('test:js:tdd', function (done) {
  process.env.NODE_ENV = 'test';

  new Server({
    configFile: __dirname + '/../../karma.conf.js',
    singleRun: false
  }, () => {
    process.env.NODE_ENV = env;
    done()
  }).start();
});

gulp.task('test', ['test:js']);
