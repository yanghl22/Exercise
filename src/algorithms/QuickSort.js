import Sort from "./Sort";
import Comparator from "../utilities/comparator";

export default class QuickSort extends Sort {
  sort(originalArray) {
    const array = [...originalArray];
    if (array.length <= 1) {
      return array;
    }
    let pivot = array.shift(),
      leftArray = [],
      rightArray = [],
      centerArray = [pivot];

    while (array.length) {
      let newElement = array.shift();

      if (this.comparator.equal(pivot, newElement)) {
        centerArray.push(newElement);
      } else if (this.comparator.lessThan(newElement, pivot)) {
        leftArray.push(newElement);
      } else {
        rightArray.push(newElement);
      }
    }
    leftArray = this.sort(leftArray);
    rightArray = this.sort(rightArray);

    return leftArray.concat(centerArray).concat(rightArray);
  }
}
