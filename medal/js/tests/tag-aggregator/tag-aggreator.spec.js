import TagAggregator from '../../modules/tag-aggregator/tag-aggregator';

describe("Tag Aggregator", function() {
  describe("Aggrgate Tags From Article Index", function() {
    it("Should return an aggregated list of tags", function() {
      const index = [
        {
          metadata: {
            tags: ['tag1', 'tag2']
          }
        },
        {
          metadata: {
            tags: ['tag3', 'tag4']
          }
        }
      ];

      const expectedAggregation = ['tag1', 'tag2', 'tag3', 'tag4'];
      const actualAggregation = TagAggregator.aggregateTagsFromArticleIndex(index);

      expect(actualAggregation).to.eql(expectedAggregation);
    });

    it("Should not include duplicates", function() {
       const index = [
        {
          metadata: {
            tags: ['tag1', 'tag2']
          }
        },
        {
          metadata: {
            tags: ['tag2', 'tag3']
          }
        }
      ];

      const expectedAggregation = ['tag1', 'tag2', 'tag3'];
      const actualAggregation = TagAggregator.aggregateTagsFromArticleIndex(index);

      expect(actualAggregation).to.eql(expectedAggregation);
    });

    it("Should skip articles that do not contain tags", function() {
       const index = [
        {
          metadata: {
            tags: ['tag1', 'tag2']
          }
        },
        {
          metadata: {}
        },
        {
          metadata: {
            tags: ['tag3', 'tag4']
          }
        }
      ];

      const expectedAggregation = ['tag1', 'tag2', 'tag3', 'tag4'];
      const actualAggregation = TagAggregator.aggregateTagsFromArticleIndex(index);

      expect(actualAggregation).to.eql(expectedAggregation);
    });
  });
});
