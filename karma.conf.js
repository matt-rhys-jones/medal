module.exports = function(config) {
  config.set({
    preprocessors: {
      'medal/**/*.js': ['babel']
    },
    browsers: ['PhantomJS'],
    frameworks: ['mocha'],
    files: [
      'medal/**/*.js'
    ]
  });
};
