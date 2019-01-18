import BubbleSort from "./BubbleSort";
// import { BubbleSortDesc } from "./BubbleSort";

import {
  equalArr,
  notSortedArr,
  reverseArr,
  sortedArr,
  SortTester
} from "./SortTester";

// Complexity constants.
const SORTED_ARRAY_VISITING_COUNT = 20;
const NOT_SORTED_ARRAY_VISITING_COUNT = 189;
const REVERSE_SORTED_ARRAY_VISITING_COUNT = 209;
const EQUAL_ARRAY_VISITING_COUNT = 20;

describe("BubbleSort", () => {
  it("should sort array", () => {
    // SortTester.testSort(BubbleSortDesc);
    SortTester.testSort(BubbleSort);
  });
});
