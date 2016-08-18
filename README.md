# Medal
Simple Markdown Static Site Generator written in ES6

# Prerequisites
- NVM (optional)
- Node v4 or above
- HTTP Server (`npm install http-server -g`)

# Folder Structure
- `./app` - contains application code used when generating the static site
- `./config` - contains configuration used by gulp tasks during builds
- `./gulp-tasks` - a suite of gulp tasks used in order to build the site
- `./content` - markdown articles should be placed here

# Gulp Tasks
- `lint` - runs linting against JS files
- `clean` - cleans the dist directory
- `compile` - compiles the site into the `dist` directory
- `test` - tests the Medal app javascript

# Preview
Run `http-server dist` from the root folder and navigate to http://localhost:8080

# Environments
Medal utilises Node Environment Variables as part of it's configuration. As an example, development builds will come with 
sourcemapping enabled, whereas production builds will not.

To enable development/production environments:

On Windows - `set NODE_ENV=[production/development]`
On *nix - `export NODE_ENV=[production/development]`
