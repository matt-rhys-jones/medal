export default class DateSorter {

  static sortByDateDescending(a, b) {
    return new Date(b) - new Date(a);
  }
}
