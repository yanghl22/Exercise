import Comparator from "./comparator";

test(" a is equal to b ", () => {
  let a = 0,
    b = 0;
  expect(new Comparator().equal(a, b));
});

test(" a is not equal to b ", () => {
  let a = 1,
    b = 2;
  expect(!new Comparator().equal(a, b));
});

test(" a is less than b", () => {
  let a = 1,
    b = 2;
  expect(new Comparator().lessThan(a, b));
});

test(" a is greater than b", () => {
  let a = 2,
    b = 1;
  expect(new Comparator().greaterThan(a, b));
});

test(" a is less than or equal to b", () => {
  let a = 2,
    b = 2;
  expect(new Comparator().lessThanOrEqual(a, b));
});

test(" a is greater than or equal to b", () => {
  let a = 2,
    b = 2;
  expect(new Comparator().greaterThanOrEqual(a, b));
});
