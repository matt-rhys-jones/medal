import Article from '../../models/article';
import ArticleMetadata from '../../models/article-metadata';

/**
 * Returns an Article from a given markdown file with front matter
 */
import paths from '../../../../../config/paths';

const extensionLength = 3;
export default class ArticleFactory {
  /**
   * @param {string} fileName
   * @param {object} file
   * 
   * @returns {Article}
   */
  static createArticle(fileName, file) {
    if (!isValidFile(file)) {
      throw new Error('Unable to create article, invalid file');
    }

    const epoch = generateEpochFromDateString(file.frontMatter.date);
    const articleURI = generateURIFromFilePath(fileName);
    const articleMetadata = new ArticleMetadata(
      file.frontMatter.title,
      file.frontMatter.intro,
      file.frontMatter.date,
      file.frontMatter.tags
    )

    return new Article(articleURI, epoch, articleMetadata);
  }
}

/**
 * @param {object} file
 * 
 * @returns {boolean}
 */
function isValidFile(file) {
  return Boolean(
    file.frontMatter.title &&
    file.frontMatter.intro &&
    file.frontMatter.date
  )
}

/**
 * @param {string} dateString
 * 
 * @returns {number}
 */
function generateEpochFromDateString(dateString) {
  return new Date(dateString).getTime();
}

/**
 * @param {string} path
 * 
 * @returns {string}
 */
function generateURIFromFilePath(path) {
  path = path.slice(0, -extensionLength);
  return paths.template.articles + '/' + path + '.html';
}
