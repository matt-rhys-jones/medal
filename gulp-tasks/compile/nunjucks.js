import paths from '../../config/paths';

const path = require('path');
const gulp = require('gulp');
const nunjucks = require('gulp-nunjucks');
const data = require('gulp-data');
const frontMatter = require('gulp-front-matter');

const nunjucksConfig = {
  paths: {
    css: '/css/styles.css'
  },
  content: [] // gets populated by compile:index task
};

gulp.task('compile:index',() => {
  const glob = [];
  glob.push(paths.content.root + '/**/*.md');

  return gulp.src(glob)
    .pipe(frontMatter())
    .pipe(data((file) => {
      nunjucksConfig.content.push({
        metadata: file.frontMatter,
        path: '/content/' + path.basename(file.path, '.md') + '.html'
      })
    }))
});

gulp.task('compile:nunjucks', ['compile:content', 'compile:index'], () => {
  const glob = [];
  glob.push(paths.app.layout + '/**/*.html');
  glob.push('!' + paths.app.layout + '/base.html');

  nunjucksConfig.content.sort((a, b) => {
    return new Date(b.metadata.date) - new Date(a.metadata.date);
  });

  gulp.src(glob)
    .pipe(nunjucks.compile(nunjucksConfig))
    .pipe(gulp.dest('dist'))
});
