import EasyPromise from "./EasyPromise";

describe("EasyPromise", () => {
  it("should return a promise value", () => {
    expect.assertions(1);

    /*To test EasyPromise with a sync action */
    // let result = new EasyPromise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve("This is the promise's value");
    //   }, 0);
    // });
    //   expect(result.value).toEqual("This is the promise's value");

    /*To test EasyPromise with a async action */
    return new EasyPromise((resolve, reject) => {
      setTimeout(() => {
        resolve("This is the promise's value");
      }, 1000);
    }).then(result => {
      expect(result).toEqual("This is the promise's value");
    });
  });
});
