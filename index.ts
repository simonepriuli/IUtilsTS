import { IEnumerable } from "./IUtilsTS/IEnumerable";
import {} from './IUtilsTS/IQuery'
const Users = new IEnumerable();

Users.Append({ name: "simone", age: 30, city: "milan", sex: "m" });
Users.Append({ name: "mark", age: 28, city: "rome", sex: "m" });
Users.Append({ name: "john", age: 31, city: "milan", sex: "m" });
Users.Append({ name: "laura", age: 25, city: "milan", sex: "f" });

Users.GetEnumerator().forEach((value: any) => {
    console.log(value);
});


const query: string = ' $age = 28 ';

console.log(Users.Has(query));


console.log(Users.Size())