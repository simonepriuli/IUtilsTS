var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
__export(exports, {
  IEnumerable: () => IEnumerable
});
class IEnumerable {
  Enumerables = new Map();
  id = -1;
  Append(obj) {
    if (this.id == -1) {
      this.id = 0;
    }
    this.Enumerables.set(this.id, obj);
    this.id += 1;
  }
  Any() {
    if (this.id == -1) {
      return false;
    } else {
      return true;
    }
  }
  GetEnumerator() {
    return this.Enumerables;
  }
  Size() {
    let x = 0;
    this.Enumerables.forEach(() => {
      x = x + 1;
    });
    return x;
  }
  Average() {
    let sampleValue = 0;
    let average = 0;
    let aveCount = 0;
    this.Enumerables.forEach((value) => {
      if (typeof value == typeof sampleValue) {
        average += value;
        aveCount += 1;
      }
    });
    if (aveCount != 0) {
      return average / aveCount;
    } else {
      return 0;
    }
  }
  NumbersToArray() {
    let sampleObj = 0;
    let array = [];
    this.Enumerables.forEach((value) => {
      if (typeof value == typeof sampleObj) {
        array.push(value);
      }
    });
    return array;
  }
  StringsToArray() {
    let sampleObj = "";
    let array = [];
    this.Enumerables.forEach((value) => {
      if (typeof value == typeof sampleObj) {
        array.push(value);
      }
    });
    return array;
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  IEnumerable
});
//# sourceMappingURL=IEnumerable.js.map
