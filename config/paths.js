export default {
  config: {
    root: 'config'
  },
  dist: {
    root: 'dist',
    css: 'dist/css',
    images: 'dist/images'
  },
  gulp: {
    root: 'gulp-tasks'
  },
  app: {
    root: 'app',
    layout: 'app/layout',
    css: 'app/css',
    images: 'app/images',
    articles: 'app/layout/articles',
    tags: 'app/layout/tags'
  },
  articles: {
    draft: {
      root: 'articles/draft'
    },
    publish: {
      root: 'articles/publish'
    }
  },
  template: {
    css: '/css/min/style.min.css',
    articles: '/articles',
    tags: '/tags'
  },
  medal: {
    root: 'medal'
  }
}
