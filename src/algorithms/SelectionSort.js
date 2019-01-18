import Sort from "./Sort";

export default class SelectionSort extends Sort {
  sort(originalArray) {
    let array = [...originalArray];

    let minIndex;
    for (let i = 0; i < array.length; i++) {
      let swapped = false;
      minIndex = i;
      for (let j = i + 1; j < array.length; j++) {
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
