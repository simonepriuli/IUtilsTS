import { IEnumerable } from './IEnumerable';

//IEnumerable deriva da C# 

interface IUser {
  username: string,
  password: string
}

const usr1: IUser = {username: 'simonepriuli', password: 'abc123'};
const usr2: IUser = {username: 'jondoe', password: 'password!'};

//array, map, obj, tuple

let Users = new IEnumerable;




const obj1 = {name: 'simone'};
const obj2 = {names: 'giorgio'};

Users.Append(obj1);
Users.Append(obj2);

console.log(Users.ObjToArray(obj1));
