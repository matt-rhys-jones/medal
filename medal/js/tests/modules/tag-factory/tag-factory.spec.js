import TagFactory from '../../../src/modules/tag-factory/tag-factory';
import paths from '../../../../../../../config/paths';

describe('Tag Factory', function() {
  describe('When creating a Tag from a tag anme', function() {
    it('Should return a Tag object with the correct values', function() {
      const tagName = 'tag';
      const expectedTagURI =  paths.template.tags + '/' + encodeURI(tagName) + '.html';
      const expectedTagFilename = paths.template.tags + '/' + tagName + '.html';

      const actualTag = TagFactory.createTag(tagName);

      expect(actualTag.uri).to.eql(expectedTagURI);
      expect(actualTag.name).to.eql(tagName);
      expect(actualTag.filename).to.eql(expectedTagFilename);
    });
  });
});
