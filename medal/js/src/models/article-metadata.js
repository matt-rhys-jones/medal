/**
 * Defines an ArticleMetadata object that provides metadata information in relation 
 * to an article. This is then used by the Article class and provided to the template
 * engine.
 */
export default class ArticleMetadata {

  /**
   * @param{string} title
   * @param{string} intro
   * @param{string} date - in datestring format
   * @param{array<string>} tags - an array of tags associated to the article
   */
  constructor(title, intro, date, tags) {
    this.title = title;
    this.intro = intro;
    this.date = date;
    this.tags = tags;
  }
}
