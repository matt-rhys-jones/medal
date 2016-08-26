[![Build Status](https://travis-ci.org/matt-rhys-jones/medal.svg?branch=master)](https://travis-ci.org/matt-rhys-jones/medal)

# Medal - ES6 Static Site Generator

Lightweight Static Site Generator written with ES6, Node, Gulp and Nunjucks. **Medal is still in development, use at your own risk!**

## Prerequisites
- NVM (optional)
- Node 4.x (or later)
- Gulp (`npm install gulp -g`)
- HTTP Server (`npm install http-server -g`)

## Installation

```
git clone https://github.com/matt-rhys-jones/medal.git my-medal-site
cd my-medal-site
npm install
```

## Getting Started

Medal takes Markdown (with front matter) and converts it to static HTML via Nunjucks templates. The following commands will allow you to add a new article and preview it using http-server.

```bash
# Install http-server if you do not already have it
npm install -g http-server

# Set environment to development (so that draft articles are included)
export NODE_ENV=development

# Add a new article (once the file is created, add front matter and some content - see articles/README.md for more information)
touch articles/draft/article.md

# Compile the site
gulp build

# Start server (ordinarily this would serve the site at http://localhost:8080)
http-server dist
```

## Changing HTML and CSS
Medal uses Nunjucks to generate static HTML and LESS to generate CSS. The Nunjucks templates can be modified in `app/layout/`, and LESS files in `app/css`. 

The LESS files follow BEM convention, with each block warranting it's own file and typically mirroring the file path of the relevant Nunjucks template file or macro. (e.g. the macro `app/layout/macros/prinary-nav.html` has a correspsonding LESS file in `app/css/medal/macros/primary-nav.less`)

## Template Variables
Running `gulp build` will compile Nunjucks with a configuration object. That configuration object exposes some variables to the Nunjucks templates:

- `{{ index }}` - array of article objects
  - `{{ index[0].uri }}` - article link
  - `{{ index[0].epoch }}` - article date epoch
  - `{{ index[0].metadata }}` - article metadata object, populated by YAML front matter on the relevant Markdown file
  - `{{ index[0].metadata.title }}` - article title
  - `{{ index[0].metadata.intro }}` - article intro
  - `{{ index[0].metadata.tags }}` - array of article tags
- `{{ tags }}` - distinct array of tags that have been specified across all articles
- `{{ paths }}` - configuration object that provides paths to compiled assets (e.g. `paths.css` links to the compiled css file)

The simplest way to familiarise yourself with the template variables is to use the Nunjucks filter to debug them e.g. `{{ index | dump }}`. 

The simplest way to add new metadata to an article (e.g. `author`) is to add a new YAML front matter property to a Markdown article (e.g. `author: 'Joe Bloggs')`. This will then be made available in the templates as `{{ index[0].metadata.author }}`.

## Folder Structure
- `./app` - contains layouts, images and CSS for the site being generated
- `./articles` - contains markdown articles for publishing to the site (articles in `articles/draft` only get shown in development environment)
- `./config` - contains configuration used by gulp tasks and medal code during builds
- `./dist` - contains the production ready code for deployment
- `./gulp-tasks` - a suite of gulp tasks used in order to build the site
- `./medal` - server side JS that is used to complement the gulp tasks when generating the site
- `./node_modules` - dependencies

## Gulp Tasks
- `lint` - runs linting against JS files
- `test` - tests all javascript (including client site and medal app javascript)
- `build` - builds the site

## Environments
Medal utilises Node Environment Variables as part of it's configuration. As an example, development builds will come with 
sourcemapping enabled, whereas production builds will not.

To enable development/production environments:

- Windows - `set NODE_ENV=[production/development]`
- *nix - `export NODE_ENV=[production/development]`
