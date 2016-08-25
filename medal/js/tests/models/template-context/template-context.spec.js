import TemplateContext from '../../../src/models/template-context/template-context';

describe('Template Context Model', function() {
  describe('When creating a Template Context model', function() {
    it('Should return a Template object with the correct values', function() {
      const mockArticleIndex = [
        {
          title: 'mockArticle'
        },
        {
          title: 'mockArticle2'
        },
      ];

      const mockTagIndex = [
        {
          title: 'mockTag'
        },
        {
          title: 'mockTag2'
        }
      ]

      const templateContext = new TemplateContext(mockArticleIndex, mockTagIndex);
      expect(templateContext.index).to.eql(mockArticleIndex);
      expect(templateContext.tags).to.eql(mockTagIndex);
    });
  });
});
