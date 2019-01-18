import Sort from "./Sort";

export default class BubbleSort extends Sort {
  sort(originalArray) {
    let swapped = false;
    let array = [...originalArray];

    for (let i = 1; i < array.length; i++) {
      let swapped = false;

      this.callbacks.visitingCallback(array[i]);

      for (let j = 0; j < array.length - i; j++) {
        this.callbacks.visitingCallback(array[j]);

        if (this.comparator.lessThan(array[j + 1], array[j])) {
          [array[j + 1], array[j]] = [array[j], array[j + 1]];
          swapped = true;
        }
      }
      if (!swapped) {
        return array;
      }
    }
    return array;
  }
}

export class BubbleSortDesc extends Sort {
  sort(originalArray) {
    let array = [...originalArray];

    for (let i = 1; i < array.length; i++) {
      let swapped = false;

      for (let j = 0; j < array.length - i; j++) {
        if (this.comparator.lessThan(array[j], array[j + 1])) {
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
          swapped = true;
        }
      }

      if (!swapped) {
        return array.reverse();
      }
    }
    return array.reverse();
  }
}
