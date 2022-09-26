import { IEnumerable } from "./IUtilsTS/IEnumerable";

const usr = new IEnumerable();

const foo = (x: any) => {
  if (x == 1) {
      return x;
  }
};

const objs: number[] = [1, 2, 3];

usr.Map(objs, foo);


console.log(usr);