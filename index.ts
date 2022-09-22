import { IEnumerable } from './IEnumerable';

interface IUser {
  name: string,
  age: number
}

const usr1: IUser = {name: 'simone', age: 22};
const usr2: IUser = {name: 'john', age: 30};

let Users = new IEnumerable;



Users.Append(usr1);
Users.Append(5);
Users.Append(usr2);
Users.Append(12);
Users.Append('Hello World!');
Users.Append({name: 'marco', age: 25});
Users.Append(-4);

console.log(Users.NumbersToArray());
