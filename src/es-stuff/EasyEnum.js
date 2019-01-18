export default class Enumeration {
  constructor(obj) {
    if (typeof obj === "object") {
      for (const key of obj) {
        this.key = obj.key;
      }
      return Object.freeze(this);
    }

    has = key => {
      return this.hasOwnProperty(key);
    };
  }
}
