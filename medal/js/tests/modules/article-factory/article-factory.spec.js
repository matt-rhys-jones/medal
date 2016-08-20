import ArticleFactory from '../../../src/modules/article-factory/article-factory';
import paths from '../../../../../../../config/paths';

describe('Article Factory', function() {
  describe('When creating an Article from a file object', function() {
    it('Should return an Article object with the correct values', function() {
      const mockFile = {
        frontMatter: {
          title: 'mockTitle',
          intro: 'mockIntro',
          date: '2015-05-01',
          tags: ['mockTag1', 'mockTag2']
        },
        path: 'mockFilePath'
      }

      const expectedMetadata = mockFile.frontMatter;
      const expectedEpoch = new Date(mockFile.frontMatter.date).getTime();
      const expectedUri = paths.template.articles + '/mockFilePath.html';
      const actualArticle = ArticleFactory.createArticle(mockFile);

      expect(actualArticle.metadata).to.eql(expectedMetadata);
      expect(actualArticle.epoch).to.eql(expectedEpoch);
      expect(actualArticle.uri).to.eql(expectedUri);
    });
  });

  describe('When creating an Article from a file object without tags', function() {
    it('Should return an Article object with an empty tags array', function() {
      const mockFile = {
        frontMatter: {
          title: 'mockTitle',
          intro: 'mockIntro',
          date: '2015-05-01'
        },
        path: 'mockFilePath'
      }

      const expectedMetadata = mockFile.frontMatter;
      expectedMetadata.tags = [];

      const actualArticle = ArticleFactory.createArticle(mockFile);
      expect(actualArticle.metadata).to.eql(expectedMetadata);
    });
  });

  describe('When creating an Article from an invalid file object', function() {
    it('Should throw an error', function() {
      const mockFile = {
        frontMatter: {
          invalidTitle: 'mockTitle',
          intro: 'mockIntro',
          date: '2015-05-01',
          tags: ['mockTag1', 'mockTag2']
        },
        path: 'mockFilePath'
      }

      function shouldThrow() {
        ArticleFactory.createArticle(mockFile);
      }

      expect(shouldThrow).to.throw();
    });
  });

  describe('When creating an Article without any file object', function() {
    it('Should throw an error', function() {
      function shouldThrow() {
        ArticleFactory.createArticle();
      }

      expect(shouldThrow).to.throw();
    });
  });
});
