import paths from '../../../../../config/paths';
import Tag from '../../models/tag';

/**
 * Returns a Tag from a given tag name
 */
export default class TagFactory {
  /**
   * @param {string} tagName
   * 
   * @returns {Article}
   */
  static createTag(tagName) {
    return new Tag(generateTagUri(tagName), generateTagFilename(tagName), tagName);
  }
}

/**
 * @param {string} tagName
 * 
 * @returns {string}
 */
function generateTagUri(tagName) {
  return paths.template.tags + '/' + encodeURI(tagName) + '.html';
}

/**
 * @param {string} tagName
 * 
 * @returns {string}
 */
function generateTagFilename(tagName) {
  return paths.template.tags + '/' + tagName + '.html'
}
