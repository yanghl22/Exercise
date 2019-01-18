import MergeSort from "./MergeSort";

import {
  equalArr,
  notSortedArr,
  reverseArr,
  sortedArr,
  SortTester
} from "./SortTester";

describe("MergeSort", () => {
  it("should sort array", () => {
    SortTester.testSort(MergeSort);
  });
});
