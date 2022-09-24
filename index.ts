import { IEnumerable } from "./IUtilsTS/IEnumerable";

const Users = new IEnumerable();

Users.Append({ name: "simone", age: 30, city: "milan", sex: "m" });
Users.Append({ name: "mark", age: 28, city: "rome", sex: "m" });
Users.Append({ name: "john", age: 31, city: "milan", sex: "m" });
Users.Append({ name: "laura", age: 25, city: "milan", sex: "f" });

const users: any = [];

users.push({ name: "simone", age: 30, city: "milan", sex: "m" });
users.push({ name: "mark", age: 28, city: "rome", sex: "m" });
users.push({ name: "john", age: 31, city: "milan", sex: "m" });
users.push({ name: "laura", age: 25, city: "milan", sex: "f" });
