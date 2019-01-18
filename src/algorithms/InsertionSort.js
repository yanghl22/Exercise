import Sort from "./Sort";

export default class InsertionSort extends Sort {
  sort(originalArray) {
    let array = [...originalArray];

    for (let i = 0; i < array.length; i++) {
      let j = i;
      while (j > 0) {
        if (this.comparator.lessThan(array[j], array[j - 1])) {
          [array[j], array[j - 1]] = [array[j - 1], array[j]];
        }
        j--;
      }
    }

    return array;
  }
}
