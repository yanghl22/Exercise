// import Enum from "./EasyEnum";

// const Status = new Enum({
//   Symbol(PENDING): "PENDING",
//   Symbol(FULFILLED): "FULFILLED",
//   Symbol(REJECTED): "REJECTED"
// });

const Status = Object.freeze({
  PENDING: Symbol("PENDING"),
  FULFILLED: Symbol("FULFILLED"),
  REJECTED: Symbol("REJECTED")
});

export default class EasyPromise {
  state = Status.PENDING;
  value = null;
  handlers = [];

  constructor(fn) {
    this.doResolve(fn, this.resolve, this.reject);
  }

  fulfill = result => {
    this.state = Status.FULFILLED;
    this.value = result;
    this.handlers.forEach(this.handle);
    this.handlers = [];
  };

  reject = reason => {
    this.state = Status.REJECTED;
    this.value = reason;
    this.handlers.forEach(this.handle);
    this.handlers = [];
  };

  resolve = result => {
    try {
      let type = typeof result;
      if (result && (type === "object" || type === "function")) {
        let then = result.then;
        if (typeof then === "function") {
          this.doResolve(then.bind(result), this.resolve, this.reject);
          return;
        }
      }
      this.fulfill(result);
    } catch (e) {
      this.reject(result);
    }
  };

  doResolve = (fn, onFulfilled, onRejected) => {
    let done = false;
    try {
      fn(
        result => {
          if (done) return;
          done = true;
          onFulfilled(result);
        },
        reason => {
          if (done) return;
          done = true;
          onRejected(reason);
        }
      );
    } catch (e) {
      if (done) return;
      done = true;
      onRejected(e);
    }
  };

  handle = handler => {
    if (this.state === Status.PENDING) {
      this.handlers.push(handler);
    }
    if (
      this.state === Status.FULFILLED &&
      typeof handler.onFulfilled === "function"
    ) {
      handler.onFulfilled(this.value);
    }
    if (
      this.state === Status.REJECTED &&
      typeof handler.onRejected === "function"
    ) {
      handler.onRejected(this.value);
    }
  };

  done = (onFulfilled, onRejected) => {
    setTimeout(() => {
      this.handle({
        onFulfilled: onFulfilled,
        onRejected: onRejected
      });
    }, 0);
  };

  then = (onFulfilled, onRejected) => {
    return new EasyPromise((resolve, reject) => {
      return this.done(
        result => {
          if (typeof onFulfilled === "function") {
            try {
              resolve(onFulfilled(result));
            } catch (ex) {
              reject(ex);
            }
          }
        },
        error => {
          if (typeof onRejected === "function") {
            try {
              resolve(onRejected(error));
            } catch (ex) {
              reject(ex);
            }
          }
        }
      );
    });
  };
}
