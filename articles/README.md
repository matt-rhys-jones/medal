# Adding Articles

Create two sub directories here, `draft` and `publish` which you can add your markdown content to. 

These directories should not be versioned.

# Draft vs Publish

Please note that *only articles in the 'publish' folder* are used when generating the site. To include articles 
in the draft folder NODE_ENV will need to be set to `development`.

This can be done by typing the following commands in the same terminal window as the build task is being run on:

- Windows - `set NODE_ENV=development`
- *nix - `export NODE_ENV=development`

When an article is ready for the big time be sure to move it to the `publish` folder and run the build in 
`production` before deploying.

# Front Matter

These articles support YAML Front Matter which can be used to add metadata to an article. This is useful 
when it comes to indexing and features like tags. Out of the box, Medal supports YAML Front Matter for  `title`,
`intro` and `tags`.

## Example Front Matter

```article.md
---
title: Article title
intro: An overview of the article which appears on the listing page
tags:
 - tag 1
 - tag 2
 - tag 3
---

(Article Content)
```

## Extending Front Matter

The Front Matter is made available as `index.item.metadata` in 
the `app\layouts` HTML templates. (For example, the title is `index.item.metadata.title`).

You can add anything you like to the Front Matter and it will be made available to the template engine, just 
update the relevant HTML files in the `app/layouts` section.

