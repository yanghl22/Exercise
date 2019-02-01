import QuickSort from "./QuickSort";
import {
  equalArr,
  notSortedArr,
  reverseArr,
  sortedArr,
  SortTester
} from "./SortTester";

const SORTED_ARRAY_VISITING_COUNT = 20;
const NOT_SORTED_ARRAY_VISITING_COUNT = 189;
const REVERSE_SORTED_ARRAY_VISITING_COUNT = 209;
const EQUAL_ARRAY_VISITING_COUNT = 20;

describe("Quick Sort", () => {
  it("Should sort array", () => {
    SortTester.testSort(QuickSort);
  });
});
