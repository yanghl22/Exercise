import Sort from "./Sort";

export default class SelectionSort extends Sort {
  sort(originalArray) {
    let array = [...originalArray],
      len = array.length;
    for (let i = 0; i < len; i++) {
      let swapped = false;
      let minIndex = i;
      for (let j = i + 1; j < len; j++) {
        if (this.comparator.lessThan(array[j], array[minIndex])) {
          minIndex = j;
          swapped = true;
        }
      }
      if (swapped) {
        [array[i], array[minIndex]] = [array[minIndex], array[i]];
      }
    }

    return array;
  }
}
