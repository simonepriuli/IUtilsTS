# IUtils utility class for TypeScript

IUtils is a utility class for TypeScript that provides 

## Usage/Examples
Copy  the IUtilsTS folder into your project and import the Utility class you need.
```typescript
import { IEnumerable } from './IUtilsTS/IEnumerable'
import { IQuery } from './IUtilsTS/IQuery'
```

Empty constructor
```typescript
let Users = new IEnumerable;
```
Strict constructor: the strict constructor allow for safe usage of the class, the Append method won't accept any object type besides the specified one.
```typescript
let Users = new IEnumerable(number);
let Users = new IEnumerable(object);
let Users = new IEnumerable(string);
```
Any method: returns true if there are any object inside the IEnumerable
```typescript
console.log(Users.Any());
```
Append method: append an object at the end of the IEnumerable
```typescript
Users.Append(object);
```
Aggregate method: return an array based on a query on the IEnumerable
```typescript
//query on object's parameters
Users.Query(" $sex : m || $city : rome && $age >= 30 ").forEach((value: any) => {
    console.log(value);
  });
```
```typescript
//query directly on objects
Users.Query(" @ > 30 && @ <= 50 ").forEach((value: any) => {
    console.log(value);
  });
```

Has method: check if the query produce any result, if so returns true
```typescript
Users.Has(' $age > 20 ');
```


## Methods
- Any
- Append
- GetEnumerator
- Size
- Average
- Sum
- NumbersToArray
- StringsToArray
- ObjToArray
- GetFirst
- GetLast
- NumberCount
- StringCount
- ObjCount
- GreaterThan
- LowerThan
- Query
- Has
