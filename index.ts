import { IEnumerable } from "./IEnumerableTS/IEnumerable";

interface IUser {
  username: string,
  sex: string,
  city: string
}

const usr1: IUser = { username: "simone", sex: "m", city: 'rome'};
const usr2: IUser = { username: "laura", sex: "f", city: 'milan' };
const usr3: IUser = { username: "john", sex: "m", city: 'milan' };
const usr4: IUser = { username: "max", sex: "m", city: 'rome' };

let Users = new IEnumerable();

Users.Append(usr1);
Users.Append(usr2);
Users.Append(usr3);
Users.Append(usr4);

Users.Aggregate(" $sex : m || $city : rome && $username : max").forEach((value: any) => {
    console.log(value);
  });
