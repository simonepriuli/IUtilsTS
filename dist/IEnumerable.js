"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IEnumerable = void 0;
class IEnumerable {
    constructor() {
        this.Enumerables = new Map();
        this.id = -1;
        this.compareKeys = (a, b) => {
            var aKeys = Object.keys(a).sort();
            var bKeys = Object.keys(b).sort();
            return JSON.stringify(aKeys) === JSON.stringify(bKeys);
        };
        this.firstNumber = () => {
            this.Enumerables.forEach((a) => {
                if (typeof (a) == typeof (this.id)) {
                    return a;
                }
                else {
                    return 0;
                }
            });
        };
    }
    //Aggiunge un oggetto any in coda
    Append(obj) {
        if (this.id == -1) {
            this.id = 0;
        }
        this.Enumerables.set(this.id, obj);
        this.id += 1;
    }
    //Controlla se l'IEnumerable è vuoto
    Any() {
        if (this.id == -1) {
            return false;
        }
        else {
            return true;
        }
    }
    //Restituisce un Enumerator iterabile
    GetEnumerator() {
        return this.Enumerables;
    }
    //Restituisce la dimensione dell'IEnumerable
    Size() {
        let x = 0;
        this.Enumerables.forEach(() => {
            x = x + 1;
        });
        return x;
    }
    //Restituisce la media tra i numeri contenuti all'interno
    Average() {
        let sampleValue = 0;
        let average = 0;
        let aveCount = 0;
        this.Enumerables.forEach((value) => {
            if (typeof (value) == typeof (sampleValue)) {
                average += value;
                aveCount += 1;
            }
        });
        if (aveCount != 0) {
            return average / aveCount;
        }
        else {
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
    //Restituisce il minimo tra i numeri contenuti all'interno
    Sum() {
        let sampleValue = 0;
        let x = 0;
        this.Enumerables.forEach((value) => {
            if (typeof (value) == typeof (sampleValue)) {
                x += value;
            }
        });
        return x;
    }
    //restituisce un arry contenente tutti i number nell'IEnumerable
    NumbersToArray() {
        let sampleObj = 0;
        let array = [];
        this.Enumerables.forEach((value) => {
            if (typeof (value) == typeof (sampleObj)) {
                array.push(value);
            }
        });
        return array;
    }
    //restituisce un arry contenente tutti le string nell'IEnumerable
    StringsToArray() {
        let sampleObj = '';
        let array = [];
        this.Enumerables.forEach((value) => {
            if (typeof (value) == typeof (sampleObj)) {
                array.push(value);
            }
        });
        return array;
    }
    //restituisce un arry contenente tutti gli oggetti del tipo passato alla funzione nell'IEnumerable
    ObjToArray(sampleObj) {
        let array = [];
        this.Enumerables.forEach((value) => {
            if (this.compareKeys(value, sampleObj)) {
                array.push(value);
            }
        });
        return array;
    }
    //restituisce il primo elemento dell'IEnumerable
    GetFirst() {
        return this.Enumerables.get(0);
    }
    //restituisce l'ultimo elemento dell'IEnumerable
    GetLast() {
        return this.Enumerables.get(this.id - 1);
    }
    //restiutisce il conteggio dei valori number all'interno dell'IEnumerable
    NumberCount() {
        let sampleObj = 0;
        let count = 0;
        this.Enumerables.forEach((value) => {
            if (typeof (value) == typeof (sampleObj)) {
                count += 1;
            }
        });
        return count;
    }
    //restiutisce il conteggio dei valori string all'interno dell'IEnumerable
    StringCount() {
        let sampleObj = '';
        let count = 0;
        this.Enumerables.forEach((value) => {
            if (typeof (value) == typeof (sampleObj)) {
                count += 1;
            }
        });
        return count;
    }
    //restiutisce il conteggio dei valori object all'interno dell'IEnumerable
    ObjCount(sampleObj) {
        let count = 0;
        this.Enumerables.forEach((value) => {
            if (this.compareKeys(value, sampleObj)) {
                count += 1;
            }
        });
        return count;
    }
    GreaterThan(x) {
        let check = true;
        this.Enumerables.forEach((a) => {
            if (a <= x) {
                check = false;
            }
        });
        return check;
    }
    LowerThan(x) {
        let check = true;
        this.Enumerables.forEach((a) => {
            if (a >= x) {
                check = false;
            }
        });
        return check;
    }
}
exports.IEnumerable = IEnumerable;
