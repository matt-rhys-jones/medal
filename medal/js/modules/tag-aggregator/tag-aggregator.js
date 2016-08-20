export default class TagAggregator {

  static aggregateTagsFromArticleIndex(index) {
    const indexLength = index.length;
    const tags = [];

    for (let i = 0; i < indexLength; i++) {
      if (!index[i].metadata.tags) {
        continue;
      }

      let tagsLength = index[i].metadata.tags.length;
      for (let j = 0; j < tagsLength; j++) {
        if (tags.indexOf(index[i].metadata.tags[j]) === -1) {
          tags.push(index[i].metadata.tags[j]);
        }
      }
    }

    return tags;
  }
}
