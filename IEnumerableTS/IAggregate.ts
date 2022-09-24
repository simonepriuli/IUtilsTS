import { IEnumerable } from "./IEnumerable";

export function IAggregate(query: string, ienumerable: any[]) {
  let resultArray: any = [];
  let queries = query.split(" ");
  let results: boolean = false;
  let parameter: string;
  let parameterValue: string;

  queries.forEach((token, index) => {
    if (token === "*") {
      resultArray = ienumerable;
      results = true;
    }

    if (token.includes("$")) {
      let aggregation = token.split("$");
      parameter = aggregation[1];

      if (queries[index + 1] === ":") {
        parameterValue = queries[index + 2];

        ienumerable.forEach((value) => {
          if (
            queries[index - 1] === "" ||
            queries[index - 1] === " " ||
            queries[index - 1] === "||"
          ) {
            if (value[parameter] === parameterValue) {
              if (!resultArray.includes(value)) {
                resultArray.push(value);
              }
            }
          }
          if (queries[index - 1] === "&&") {
            if (resultArray.includes(value)) {
              if (!(value[parameter] === parameterValue)) {
                let i = resultArray.indexOf(value);
                resultArray.splice(i, 1);
              }
            }
          }

          results = true;
        });
      }
    }
  });

  if (results == false) {
    resultArray.push("no result found");
  }
  return resultArray;
}

// $username : simone
// $ username : simone {parameter = uersname}
//