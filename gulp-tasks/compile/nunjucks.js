import paths from '../../config/paths';
import settings from '../../config/settings';
import DateSorter from '../../medal/js/modules/date-sorter/date-sorter';

const path = require('path');
const gulp = require('gulp');
const nunjucks = require('gulp-nunjucks');
const data = require('gulp-data');
const frontMatter = require('gulp-front-matter');

const nunjucksConfig = {
  paths: {
    css: '/css/style.min.css'
  },
  index: [] // populated by compile:index task
};

gulp.task('compile:index', ['pre-compile'], () => {
  const glob = [];

  glob.push(paths.articles.publish.root + '/**/*.md');

  if (process.env.NODE_ENV === 'development') {
    glob.push(paths.articles.draft.root + '/**/*.md');
  }

  return gulp.src(glob)
    .pipe(frontMatter())
    .pipe(data((file) => {
      nunjucksConfig.index.push({
        metadata: file.frontMatter,
        path: '/articles/' + path.basename(file.path, '.md') + '.html'
      })
    }))
});

gulp.task('compile:nunjucks', ['compile:articles', 'compile:index'], () => {
  const glob = [];

  glob.push(paths.app.layout + '/**/*.html');
  glob.push('!' + paths.app.layout + '/base.html');
  glob.push('!' + paths.app.layout + '/macros/**/*.html');

  nunjucksConfig.index.sort((a, b) => {
    return DateSorter.sortByDateDescending(a.metadata.date, b.metadata.date);
  });

  gulp.src(glob)
    .pipe(nunjucks.compile(nunjucksConfig))
    .pipe(gulp.dest('dist'))
});
