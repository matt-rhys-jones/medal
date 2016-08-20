import paths from '../../../../config/paths';

/**
 * Defines the template context object that can be passed to the template engine
 */
export default class TemplateContext {

  /**
   * @param {string} cssPath
   * @param {array<Article>} articleIndex
   * @param {array<Tag>} tagIndex
   */
  constructor(articleIndex, tagIndex) {
    this.index = articleIndex;
    this.tags = tagIndex;
    this.paths = {
      css: paths.template.css, 
    };
  }
}
