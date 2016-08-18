module.exports = function(config) {
  config.set({
    preprocessors: {
      'medal/js/modules/**/*.js': ['babel'],
      'medal/js/tests/**/*.spec.js': ['babel']
    },
    babelPreprocessor: {
      options: {
          "presets": ["es2015"],
          "plugins": ["transform-es2015-modules-umd"]
      }
    },
    reporters: ['progress', 'coverage'],
    coverageReporter: {
      type : 'text'
    },
    browsers: ['PhantomJS'],
    frameworks: ['mocha', 'chai'],
    files: [
      'medal/js/modules/**/*.js',
      'medal/js/tests/**/*.spec.js'
    ]
  });
};
