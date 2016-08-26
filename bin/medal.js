#!/usr/bin/env Node
const program = require('commander');
const fsExtra = require('fs-extra');
const path = require('path');

const source = path.resolve(__dirname, '../', 'medal', 'templates', 'draft-article.md');
const dest = path.resolve(__dirname, '../', 'articles', 'draft');

program
  .version('0.0.1')
  .command('create-draft [title]', 'Create a new draft (e.g. medal create-draft my-new-article)')
  .action(function(cmd, options){
    if (!options) {
      throw new Error('Title required (create-draft -f"my-new-article")');
    }

    try {
      fsExtra.copySync(source, path.resolve(dest, options + '.md'));
    } catch (err) {
      throw new Error(err);
    }
  })
  .parse(process.argv);
