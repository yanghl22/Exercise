import Sort from "./Sort";
export default class MergeSort extends Sort {
  sort(originalArray) {
    if (originalArray.length <= 1) {
      return originalArray;
    }
    let array = [...originalArray];

    let middleIndex = Math.floor(array.length / 2);

    let leftArray = this.sort(array.slice(0, middleIndex));
    let rightArray = this.sort(array.slice(middleIndex, array.length));

    return this.combine(leftArray, rightArray);
  }

  combine(leftArray, rightArray) {
    let newArray = [];
    while (leftArray.length && rightArray.length) {
      let miniItem = null;
      if (this.comparator.lessThan(leftArray[0], rightArray[0])) {
        miniItem = leftArray.shift();
      } else {
        miniItem = rightArray.shift();
      }
      newArray.push(miniItem);
    }
    if (leftArray.length) {
      newArray = newArray.concat(leftArray);
    }
    if (rightArray.length) {
      newArray = newArray.concat(rightArray);
    }
    return newArray;
  }
}
