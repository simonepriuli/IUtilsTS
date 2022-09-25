import { IQuery, IQueryHas, IQueryKey } from "./IQuery";

export class IEnumerable {
  private Enumerables = new Map();
  private id: number = -1;
  private IEnumerableType: any = {};

  /**
   * IEnumerable constructor.
   * @param {any} IEnumerableType - IEnumerable take a sample object IEnumerableType to instruct the Append method to only accept that type.
   */
  constructor(IEnumerableType?: any) {
    this.IEnumerableType = IEnumerableType;
  }

  private wrongTypeErr(obj1: any): never {
    throw new Error(
      "Can't .Append() object of type: " +
        typeof obj1 +
        " on IEnumerable of type: " +
        typeof this.IEnumerableType
    );
  }

  private compareKeys = (a: any, b: any) => {
    var aKeys = Object.keys(a).sort();
    var bKeys = Object.keys(b).sort();
    return JSON.stringify(aKeys) === JSON.stringify(bKeys);
  };

  private firstNumber = () => {
    this.Enumerables.forEach((a) => {
      if (typeof a == typeof this.id) {
        return a;
      } else {
        return 0;
      }
    });
  };

  /**
   * Append the parameter at the end of the IEnumerable
   * @param {any} any - Any if you did not set the constructor IEnumerableType.
   */
  Append(obj: any) {
    if (this.IEnumerableType == undefined) {
      if (this.id == -1) {
        this.id = 0;
      }
      this.Enumerables.set(this.id, obj);
      this.id += 1;
    } else {
      if (this.compareKeys(obj, this.IEnumerableType)) {
        if (this.id == -1) {
          this.id = 0;
        }
        this.Enumerables.set(this.id, obj);
        this.id += 1;
      } else {
        this.wrongTypeErr(obj);
      }
    }
  }

  /**
   * Returns true if the IEnumerable contains any object.
   * @return {Boolean} boolean.
   */
  Any() {
    if (this.id == -1) {
      return false;
    } else {
      return true;
    }
  }

  /**
   * Returns an iterable Map.
   * @return {Map} Map.
   */
  GetEnumerator(): Map<any, any> {
    return this.Enumerables;
  }

  /**
   * Returns the size of the IEnumerable.
   * @return {Number} Number.
   */
  Size(): number {
    let a: number = this.Enumerables.size;

    return a;
  }

  /**
   * Returns the average of the numbers inside the IEnumerable.
   * @return {Number} Number.
   */
  Average(): number {
    let sampleValue: number = 0;

    let average: number = 0;
    let aveCount: number = 0;

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

  //Restituisce il massimo tra i numeri contenuti all'interno
  /* 
  Max() {
    let sampleValue: number = 0;
    let x: any = this.firstNumber();

    this.Enumerables.forEach((value) => {
      if (typeof (value) == typeof (sampleValue)) {
        if (value > x) { x = value }
      }
    })

    return x;
  }
  */

  //Restituisce il minimo tra i numeri contenuti all'interno
  /*
  Min() {
    let sampleValue: number = 0;
    let x: any = this.firstNumber();

    this.Enumerables.forEach((value) => {
      if (typeof (value) == typeof (sampleValue)) {
        if (value < x) { x = value }
      }
    })

    return x;
  }
  */

  /**
   * Returns the sum of the numbers inside the IEnumerable.
   * @return {Number} Number.
   */
  Sum(): number {
    let sampleValue: number = 0;
    let x: number = 0;

    this.Enumerables.forEach((value) => {
      if (typeof value == typeof sampleValue) {
        x += value;
      }
    });

    return x;
  }

  /**
   * Returns an array with the numbers inside the IEnumerable.
   * @return {Array} Array.
   */
  NumbersToArray() {
    let sampleObj: number = 0;
    let array: any[] = [];

    this.Enumerables.forEach((value) => {
      if (typeof value == typeof sampleObj) {
        array.push(value);
      }
    });

    return array;
  }

  /**
   * Returns an array with the strings inside the IEnumerable.
   * @return {Array} Array.
   */
  StringsToArray() {
    let sampleObj: string = "";
    let array: any[] = [];

    this.Enumerables.forEach((value) => {
      if (typeof value == typeof sampleObj) {
        array.push(value);
      }
    });

    return array;
  }

  /**
   * Returns an array with the objects inside the IEnumerable.
   * @param {any} any - Specify the object type to aggregate.
   * @return {Array} Array.
   */
  ObjToArray(sampleObj: any) {
    let array: any[] = [];

    this.Enumerables.forEach((value) => {
      if (this.compareKeys(value, sampleObj)) {
        array.push(value);
      }
    });

    return array;
  }

  /**
   * Returns the first element of the IEnumerable.
   * @return {Any} Any.
   */
  GetFirst() {
    return this.Enumerables.get(0);
  }

  /**
   * Returns the last element of the IEnumerable.
   * @return {Any} Any.
   */
  GetLast() {
    return this.Enumerables.get(this.id - 1);
  }

  /**
   * Returns the count of numbers inside the IEnumerable.
   * @return {Number} Number.
   */

  NumberCount() {
    let sampleObj: number = 0;
    let count: number = 0;

    this.Enumerables.forEach((value) => {
      if (typeof value == typeof sampleObj) {
        count += 1;
      }
    });

    return count;
  }

  /**
   * Returns the count of strings inside the IEnumerable.
   * @return {Number} Number.
   */
  StringCount() {
    let sampleObj: string = "";
    let count: number = 0;

    this.Enumerables.forEach((value) => {
      if (typeof value == typeof sampleObj) {
        count += 1;
      }
    });

    return count;
  }

  /**
   * Returns the count of objects inside the IEnumerable.
   * @param {any} Any - Specify the object type to count.
   * @return {number} Number.
   */
  ObjCount(sampleObj: any) {
    let count: number = 0;

    this.Enumerables.forEach((value) => {
      if (this.compareKeys(value, sampleObj)) {
        count += 1;
      }
    });

    return count;
  }

  /**
   * Returns true if all numbers inside the IEnumerable are greater than the parameter.
   * @param {number} number
   * @return {boolean} boolean.
   */
  GreaterThan(x: number): boolean {
    let check: boolean = true;
    this.Enumerables.forEach((a) => {
      if (a <= x) {
        check = false;
      }
    });
    return check;
  }

  /**
   * Returns true if all numbers inside the IEnumerable are lower than the parameter.
   * @param {number} number
   * @return {boolean} boolean.
   */
  LowerThan(x: number): boolean {
    let check: boolean = true;
    this.Enumerables.forEach((a) => {
      if (a >= x) {
        check = false;
      }
    });
    return check;
  }

  /**
   * Returns an array based on the query aggregation results.
   * @param {string} string - the query
   * @return {Array} Array.
   */
  Query(query: string) {
    let array: any = [];

    this.Enumerables.forEach((value) => {
      array.push(value);
    });

    return IQuery(query, array);
  }

  /**
   * Delete objects inside the IEnumerable based on the query results.
   * @param {string} string - the query
   */

  /*
  Delete(query: string) {
    let array: any = [];

    this.Enumerables.forEach((value) => {
      array.push(value);
    });
    IQueryKey(query, array)?.forEach((value: number) => {
      console.log(value);
      this.Enumerables.delete(value);
    });
  }
/*


  /**
   * Check if the passed query produce any result, if so returns true.
   * @param {string} string - the query
   * @return {Boolean} boolean
   */
  Has(query: string) {
    let array: any = [];

    this.Enumerables.forEach((value) => {
      array.push(value);
    });

    return IQueryHas(query, array);
  }
}
