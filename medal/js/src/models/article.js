/**
 * Defines an article object that provides information about an article used
 * by the template engine
 */
export default class Article {

  /**
   * @param {string} uri
   * @param {number} epoch
   * @pram {ArticleMetadata} metadata
   */
  constructor(uri, epoch, metadata) {
    this.uri = uri;
    this.epoch = epoch;
    this.metadata = metadata;
  }
}
