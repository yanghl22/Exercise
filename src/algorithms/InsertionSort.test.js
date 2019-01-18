import InsertionSort from "./InsertionSort";

import {
  equalArr,
  notSortedArr,
  reverseArr,
  sortedArr,
  SortTester
} from "./SortTester";

describe("SelectionSort", () => {
  it("should sort array", () => {
    SortTester.testSort(InsertionSort);
  });
});
