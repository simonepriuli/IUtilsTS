# IEnumerable class for TypeScript

IEnumerable utility class (inspired by C# LINQ IEnumerable) broght to TypeScript.

## Usage/Examples
Copy IEnumerable.ts from the IEnumerableTS folder into your project and import it where you want to use it.
```typescript
import { IEnumerable } from './IEnumerable'
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
