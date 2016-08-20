import Article from '../../models/article';
import ArticleMetadata from '../../models/article-metadata';

/**
 * Returns an Article from a given markdown file with front matter
 */
import paths from '../../../../../config/paths';

export default class ArticleFactory {
  /**
   * @param {File} file
   * 
   * @returns {Article}
   */
  static createArticle(file) {
    if (!isValidFile(file)) {
      throw new Error('Unable to create article, invalid file');
    }

    const epoch = generateEpochFromDateString(file.frontMatter.date);
    const articleURI = generateURIFromFilePath(file.path);
    const articleMetadata = new ArticleMetadata(
      file.frontMatter.title,
      file.frontMatter.intro,
      file.frontMatter.date,
      file.frontMatter.tags
    )

    return new Article(articleURI, epoch, articleMetadata);
  }
}

function isValidFile(file) {
  return Boolean(
    file.frontMatter.title &&
    file.frontMatter.intro &&
    file.frontMatter.date &&
    file.path
  )
}

function generateEpochFromDateString(dateString) {
  return new Date(dateString).getTime();
}


function generateURIFromFilePath(path) {
  return paths.template.articles + '/' + encodeURI(path) + '.html';
}
