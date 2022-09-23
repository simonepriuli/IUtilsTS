import { IEnumerable } from './IEnumerableTS/IEnumerable'

interface IUser {
    username: string,
    age: number
}

const usr1: IUser = {username: 'simone', age: 22};
const usr2: IUser = {username: 'john', age: 30};

let Users = new IEnumerable;

Users.Append(usr1);
Users.Append(1);
Users.Append('Ciao');
Users.Append(usr2);
Users.Append(10);

console.log(Users.ObjCount(usr1)); 

