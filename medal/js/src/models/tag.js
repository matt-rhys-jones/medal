/**
 * Defines a tag object that provides information about a tag used
 * by the template engine
 */
export default class Tag {

  /**
   * @param {string} uri
   * @param {string} filename
   * @param {string} name
   */
  constructor(uri, filename, name) {
    this.uri = uri;
    this.filename = filename;
    this.name = name;
  }
}
