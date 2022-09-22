export class IEnumerable {

  Enumerables = new Map();
  id: number = -1;

  //Aggiunge un oggetto any in coda
  Append(obj: any) {
    if (this.id == -1) {this.id = 0}
    this.Enumerables.set(this.id, obj);
    this.id += 1;
  }

  //Controlla se l'IEnumerable è vuoto
  Any() {
    if (this.id == -1) {return false}
    else {return true}
  }

  //Restituisce un Enumerator iterabile
  GetEnumerator(): Map<any, any> {
    return this.Enumerables;
  }  

  //Restituisce la dimensione dell'IEnumerable
  Size(): number {
    let x: number = 0;
    this.Enumerables.forEach(()=> {
      x = x +1;
    });
    return x;
  } 

  //Restituisce la media tra i numeri contenuti all'interno
  Average(): number {
    let sampleValue: number = 0;
    
    let average: number = 0;
    let aveCount: number = 0;
    
    this.Enumerables.forEach((value)=> {
      if (typeof(value) == typeof(sampleValue)) {
        average += value;
        aveCount += 1;
      }
    })
    if (aveCount != 0) {return average/aveCount}
    else {return 0}
  }

  
  
}
