import EasyPromise from "./EasyPromise";

describe("EasyPromise", () => {
  it("should return a promise value", () => {
    expect.assertions(1);

    return new EasyPromise((resolve, reject) => {
      setTimeout(() => {
        resolve("This is the promise's value");
      }, 1000);
    }).then(result => {
      // console.log(result);
      return expect(result).toEqual("This is the promise's value");
    });
  });
});
