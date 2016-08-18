import DateSorter from '../../modules/date-sorter/date-sorter.js';

describe("Date Sorter", function() {
  describe("Sort by date descending", function() {
    it("Should return the second date minus the first date ", function() {
      const firstDate = '2015-05-01';
      const secondDate = '2015-06-01';

      const firstDateObject = new Date(firstDate);
      const secondDateObject = new Date(secondDate);

      const expectedReturn = secondDateObject - firstDateObject;

      expect(DateSorter.sortByDateDescending('2015-05-01', '2015-06-01')).to.equal(expectedReturn)
    });
  });
});
