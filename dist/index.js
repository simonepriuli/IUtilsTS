"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IEnumerable_1 = require("./IEnumerable");
const usr1 = { name: 'simone', age: 22 };
const usr2 = { name: 'john', age: 30 };
let Users = new IEnumerable_1.IEnumerable;
Users.Append(usr1);
Users.Append(5);
Users.Append(usr2);
Users.Append(12);
Users.Append('Hello World!');
Users.Append({ name: 'marco', age: 25 });
Users.Append(-4);
console.log(Users.NumbersToArray());