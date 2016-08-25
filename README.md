# Medal

Lightweight Markdown Static Site Generator written with ES6, Node, Gulp and Nunjucks. **Medal is still in development, use at your own risk!**

# Prerequisites
- NVM (optional)
- Node 4.x (or later)
- Gulp (`npm install gulp-cli -g`)
- HTTP Server (`npm install http-server -g`)

# Installation

```
git clone https://github.com/matt-rhys-jones/medal.git
npm install
cp config/deploy.dist.js config/deploy.js
```

You will need to create `articles/draft` and `articles/publish` folders. If you do not want articles to be published and only want to view drafts then you should set `NODE_ENV` to `development`.

# Folder Structure
- `./app` - contains layouts, images and CSS for the site being generated
- `./articles` - contains markdown articles for publishing to the site, draft articles only get shown in development mode
= `./articles/draft` - create this folder yourself and put draft markdown articles here (only used if `NODE_ENV` is set to `development`)
= `./articles/publish` - create this folder yourself and put articles ready to publish here
- `./config` - contains configuration used by gulp tasks and medal code during builds
- `./dist` - contains the production ready code for deployment
- `./gulp-tasks` - a suite of gulp tasks used in order to build the site
- `./medal` - server side JS that is used to complement the gulp tasks when generating the site
- `./node_modules` - dependencies

# Gulp Tasks
- `lint` - runs linting against JS files
- `test` - tests all javascript (including client site and medal app javascript)
- `build` - builds the site

# Preview
Run `http-server dist` from the root folder and navigate to http://localhost:8080

# Environments
Medal utilises Node Environment Variables as part of it's configuration. As an example, development builds will come with 
sourcemapping enabled, whereas production builds will not.

To enable development/production environments:

- Windows - `set NODE_ENV=[production/development]`
- *nix - `export NODE_ENV=[production/development]`
