/**
 * Returns an array based on the query aggregation results.
 * @param {string} string - the query
 * @param {Array} array - the array to execute the query on
 * @return {Array} Array.
 */
export function IQuery(query: string, ienumerable: any[]) {
  let resultArray: any = [];
  let queries = query.split(" ");
  let results: boolean = false;
  let parameter: any;
  let parameterValue: any;

  queries.forEach((token, index) => {
    if (token === "*") {
      resultArray = ienumerable;
      results = true;
    }

    if (token.includes("$")) {
      let aggregation = token.split("$");
      parameter = aggregation[1];

      if (queries[index + 1] === "=") {
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

      if (queries[index + 1] === ">") {
        parameterValue = queries[index + 2];

        ienumerable.forEach((value) => {
          if (
            queries[index - 1] === "" ||
            queries[index - 1] === " " ||
            queries[index - 1] === "||"
          ) {
            if (value[parameter] > +parameterValue) {
              if (!resultArray.includes(value)) {
                resultArray.push(value);
              }
            }
          }
          if (queries[index - 1] === "&&") {
            if (resultArray.includes(value)) {
              if (!(value[parameter] > +parameterValue)) {
                let i = resultArray.indexOf(value);
                resultArray.splice(i, 1);
              }
            }
          }

          results = true;
        });
      }

      if (queries[index + 1] === ">=") {
        parameterValue = queries[index + 2];

        ienumerable.forEach((value) => {
          if (
            queries[index - 1] === "" ||
            queries[index - 1] === " " ||
            queries[index - 1] === "||"
          ) {
            if (value[parameter] >= +parameterValue) {
              if (!resultArray.includes(value)) {
                resultArray.push(value);
              }
            }
          }
          if (queries[index - 1] === "&&") {
            if (resultArray.includes(value)) {
              if (!(value[parameter] >= +parameterValue)) {
                let i = resultArray.indexOf(value);
                resultArray.splice(i, 1);
              }
            }
          }

          results = true;
        });
      }

      if (queries[index + 1] === "<") {
        parameterValue = queries[index + 2];

        ienumerable.forEach((value) => {
          if (
            queries[index - 1] === "" ||
            queries[index - 1] === " " ||
            queries[index - 1] === "||"
          ) {
            if (value[parameter] < +parameterValue) {
              if (!resultArray.includes(value)) {
                resultArray.push(value);
              }
            }
          }
          if (queries[index - 1] === "&&") {
            if (resultArray.includes(value)) {
              if (!(value[parameter] < +parameterValue)) {
                let i = resultArray.indexOf(value);
                resultArray.splice(i, 1);
              }
            }
          }

          results = true;
        });
      }

      if (queries[index + 1] === "<=") {
        parameterValue = queries[index + 2];

        ienumerable.forEach((value) => {
          if (
            queries[index - 1] === "" ||
            queries[index - 1] === " " ||
            queries[index - 1] === "||"
          ) {
            if (value[parameter] <= +parameterValue) {
              if (!resultArray.includes(value)) {
                resultArray.push(value);
              }
            }
          }
          if (queries[index - 1] === "&&") {
            if (resultArray.includes(value)) {
              if (!(value[parameter] <= +parameterValue)) {
                let i = resultArray.indexOf(value);
                resultArray.splice(i, 1);
              }
            }
          }

          results = true;
        });
      }
    }

    if (token.includes("@")) {
      parameterValue = queries[index + 2];

      if (queries[index + 1] === ">") {
        ienumerable.forEach((value) => {
          if (
            queries[index - 1] === "" ||
            queries[index - 1] === " " ||
            queries[index - 1] === "||"
          ) {
            if (value > parameterValue) {
              if (!resultArray.includes(value)) {
                resultArray.push(value);
              }
            }
          }
          if (queries[index - 1] === "&&") {
            if (resultArray.includes(value)) {
              if (!(value > parameterValue)) {
                let i = resultArray.indexOf(value);
                resultArray.splice(i, 1);
              }
            }
          }

          results = true;
        });
      }

      if (queries[index + 1] === ">=") {
        ienumerable.forEach((value) => {
          if (
            queries[index - 1] === "" ||
            queries[index - 1] === " " ||
            queries[index - 1] === "||"
          ) {
            if (value >= parameterValue) {
              if (!resultArray.includes(value)) {
                resultArray.push(value);
              }
            }
          }
          if (queries[index - 1] === "&&") {
            if (resultArray.includes(value)) {
              if (!(value >= parameterValue)) {
                let i = resultArray.indexOf(value);
                resultArray.splice(i, 1);
              }
            }
          }

          results = true;
        });
      }

      if (queries[index + 1] === "<") {
        ienumerable.forEach((value) => {
          if (
            queries[index - 1] === "" ||
            queries[index - 1] === " " ||
            queries[index - 1] === "||"
          ) {
            if (value < parameterValue) {
              if (!resultArray.includes(value)) {
                resultArray.push(value);
              }
            }
          }
          if (queries[index - 1] === "&&") {
            if (resultArray.includes(value)) {
              if (!(value < parameterValue)) {
                let i = resultArray.indexOf(value);
                resultArray.splice(i, 1);
              }
            }
          }

          results = true;
        });
      }

      if (queries[index + 1] === "<=") {
        ienumerable.forEach((value) => {
          if (
            queries[index - 1] === "" ||
            queries[index - 1] === " " ||
            queries[index - 1] === "||"
          ) {
            if (value <= parameterValue) {
              if (!resultArray.includes(value)) {
                resultArray.push(value);
              }
            }
          }
          if (queries[index - 1] === "&&") {
            if (resultArray.includes(value)) {
              if (!(value <= parameterValue)) {
                let i = resultArray.indexOf(value);
                resultArray.splice(i, 1);
              }
            }
          }

          results = true;
        });
      }

      if (queries[index + 1] === "=") {
        ienumerable.forEach((value) => {
          if (
            queries[index - 1] === "" ||
            queries[index - 1] === " " ||
            queries[index - 1] === "||"
          ) {
            if (value == parameterValue) {
              if (!resultArray.includes(value)) {
                resultArray.push(value);
              }
            }
          }
          if (queries[index - 1] === "&&") {
            if (resultArray.includes(value)) {
              if (!(value == parameterValue)) {
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

/**
 * Returns an array of positions based on the query aggregation results.
 * @param {string} string - the query
 * @param {Array} array - the array to execute the query on
 * @return {Array} Array.
 */
export function IQueryKey(query: string, ienumerable: any[]) {
  let resultArray: any = [];
  let queries = query.split(" ");
  let results: boolean = false;
  let parameter: any;
  let parameterValue: any;
  let count: number = 0;

  queries.forEach((token, index) => {
    if (token === "*") {
      resultArray = ienumerable;
      results = true;
    }

    if (token.includes("$")) {
      let aggregation = token.split("$");
      parameter = aggregation[1];

      if (queries[index + 1] === "=") {
        parameterValue = queries[index + 2];

        ienumerable.forEach((value) => {
          if (
            queries[index - 1] === "" ||
            queries[index - 1] === " " ||
            queries[index - 1] === "||"
          ) {
            if (value[parameter] === parameterValue) {
              if (!resultArray.includes(value)) {
                resultArray.push(count);
              }
            }
          }
          if (queries[index - 1] === "&&") {
            if (resultArray.includes(value)) {
              if (!(value[parameter] === parameterValue)) {
                let i = resultArray.indexOf(value);
                resultArray.push(count);
              }
            }
          }

          results = true;
        });
      }

      if (queries[index + 1] === ">") {
        parameterValue = queries[index + 2];

        ienumerable.forEach((value) => {
          if (
            queries[index - 1] === "" ||
            queries[index - 1] === " " ||
            queries[index - 1] === "||"
          ) {
            if (value[parameter] > +parameterValue) {
              if (!resultArray.includes(value)) {
                resultArray.push(count);
              }
            }
          }
          if (queries[index - 1] === "&&") {
            if (resultArray.includes(value)) {
              if (!(value[parameter] > +parameterValue)) {
                let i = resultArray.indexOf(value);
                resultArray.push(count);
              }
            }
          }

          results = true;
        });
      }

      if (queries[index + 1] === ">=") {
        parameterValue = queries[index + 2];

        ienumerable.forEach((value) => {
          if (
            queries[index - 1] === "" ||
            queries[index - 1] === " " ||
            queries[index - 1] === "||"
          ) {
            if (value[parameter] >= +parameterValue) {
              if (!resultArray.includes(value)) {
                resultArray.push(count);
              }
            }
          }
          if (queries[index - 1] === "&&") {
            if (resultArray.includes(value)) {
              if (!(value[parameter] >= +parameterValue)) {
                let i = resultArray.indexOf(value);
                resultArray.push(count);
              }
            }
          }

          results = true;
        });
      }

      if (queries[index + 1] === "<") {
        parameterValue = queries[index + 2];

        ienumerable.forEach((value) => {
          if (
            queries[index - 1] === "" ||
            queries[index - 1] === " " ||
            queries[index - 1] === "||"
          ) {
            if (value[parameter] < +parameterValue) {
              if (!resultArray.includes(value)) {
                resultArray.push(count);
              }
            }
          }
          if (queries[index - 1] === "&&") {
            if (resultArray.includes(value)) {
              if (!(value[parameter] < +parameterValue)) {
                let i = resultArray.indexOf(value);
                resultArray.push(count);
              }
            }
          }

          results = true;
          count += 1;
        });
      }

      if (queries[index + 1] === "<=") {
        parameterValue = queries[index + 2];

        ienumerable.forEach((value) => {
          if (
            queries[index - 1] === "" ||
            queries[index - 1] === " " ||
            queries[index - 1] === "||"
          ) {
            if (value[parameter] <= +parameterValue) {
              if (!resultArray.includes(value)) {
                resultArray.push(count);
              }
            }
          }
          if (queries[index - 1] === "&&") {
            if (resultArray.includes(value)) {
              if (!(value[parameter] <= +parameterValue)) {
                let i = resultArray.indexOf(value);
                resultArray.push(count);
              }
            }
          }

          results = true;
        });
      }
    }

    if (token.includes("@")) {
      parameterValue = queries[index + 2];

      if (queries[index + 1] === ">") {
        ienumerable.forEach((value) => {
          if (
            queries[index - 1] === "" ||
            queries[index - 1] === " " ||
            queries[index - 1] === "||"
          ) {
            if (value > parameterValue) {
              if (!resultArray.includes(value)) {
                resultArray.push(count);
              }
            }
          }
          if (queries[index - 1] === "&&") {
            if (resultArray.includes(value)) {
              if (!(value > parameterValue)) {
                let i = resultArray.indexOf(value);
                resultArray.push(count);
              }
            }
          }

          results = true;
        });
      }

      if (queries[index + 1] === ">=") {
        ienumerable.forEach((value) => {
          if (
            queries[index - 1] === "" ||
            queries[index - 1] === " " ||
            queries[index - 1] === "||"
          ) {
            if (value >= parameterValue) {
              if (!resultArray.includes(value)) {
                resultArray.push(count);
              }
            }
          }
          if (queries[index - 1] === "&&") {
            if (resultArray.includes(value)) {
              if (!(value >= parameterValue)) {
                let i = resultArray.indexOf(value);
                resultArray.push(count);
              }
            }
          }

          results = true;
        });
      }

      if (queries[index + 1] === "<") {
        ienumerable.forEach((value) => {
          if (
            queries[index - 1] === "" ||
            queries[index - 1] === " " ||
            queries[index - 1] === "||"
          ) {
            if (value < parameterValue) {
              if (!resultArray.includes(value)) {
                resultArray.push(count);
              }
            }
          }
          if (queries[index - 1] === "&&") {
            if (resultArray.includes(value)) {
              if (!(value < parameterValue)) {
                let i = resultArray.indexOf(value);
                resultArray.push(count);
              }
            }
          }

          results = true;
        });
      }

      if (queries[index + 1] === "<=") {
        ienumerable.forEach((value) => {
          if (
            queries[index - 1] === "" ||
            queries[index - 1] === " " ||
            queries[index - 1] === "||"
          ) {
            if (value <= parameterValue) {
              if (!resultArray.includes(value)) {
                resultArray.push(count);
              }
            }
          }
          if (queries[index - 1] === "&&") {
            if (resultArray.includes(value)) {
              if (!(value <= parameterValue)) {
                let i = resultArray.indexOf(value);
                resultArray.push(count);
              }
            }
          }

          results = true;
        });
      }

      if (queries[index + 1] === "=") {
        ienumerable.forEach((value) => {
          if (
            queries[index - 1] === "" ||
            queries[index - 1] === " " ||
            queries[index - 1] === "||"
          ) {
            if (value == parameterValue) {
              if (!resultArray.includes(value)) {
                resultArray.push(count);
              }
            }
          }
          if (queries[index - 1] === "&&") {
            if (resultArray.includes(value)) {
              if (!(value == parameterValue)) {
                let i = resultArray.indexOf(value);
                resultArray.push(count);
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

/**
 * Returns true if the query produce any result.
 * @param {string} string - the query
 * @param {Array} array - the array to execute the query on
 * @return {Boolean} Boolean.
 */
export function IQueryHas(query: string, ienumerable: any[]) {
  let resultArray: any = [];
  let queries = query.split(" ");
  let results: boolean = false;
  let parameter: any;
  let parameterValue: any;
  let count: number = 0;

  queries.forEach((token, index) => {
    if (token === "*") {
      resultArray = ienumerable;
      results = true;
    }

    if (token.includes("$")) {
      let aggregation = token.split("$");
      parameter = aggregation[1];

      if (queries[index + 1] === "=") {
        parameterValue = queries[index + 2];

        ienumerable.forEach((value) => {
          if (
            queries[index - 1] === "" ||
            queries[index - 1] === " " ||
            queries[index - 1] === "||"
          ) {
            if (value[parameter] === parameterValue) {
              if (!resultArray.includes(value)) {
                results = true;
              }
            }
          }
          if (queries[index - 1] === "&&") {
            if (resultArray.includes(value)) {
              if (!(value[parameter] === parameterValue)) {
                let i = resultArray.indexOf(value);
                results = true;
              }
            }
          }
        });
      }

      if (queries[index + 1] === ">") {
        parameterValue = queries[index + 2];

        ienumerable.forEach((value) => {
          if (
            queries[index - 1] === "" ||
            queries[index - 1] === " " ||
            queries[index - 1] === "||"
          ) {
            if (value[parameter] > +parameterValue) {
              if (!resultArray.includes(value)) {
                results = true;
              }
            }
          }
          if (queries[index - 1] === "&&") {
            if (resultArray.includes(value)) {
              if (!(value[parameter] > +parameterValue)) {
                let i = resultArray.indexOf(value);
                results = true;
              }
            }
          }
        });
      }

      if (queries[index + 1] === ">=") {
        parameterValue = queries[index + 2];

        ienumerable.forEach((value) => {
          if (
            queries[index - 1] === "" ||
            queries[index - 1] === " " ||
            queries[index - 1] === "||"
          ) {
            if (value[parameter] >= +parameterValue) {
              if (!resultArray.includes(value)) {
                results = true;
              }
            }
          }
          if (queries[index - 1] === "&&") {
            if (resultArray.includes(value)) {
              if (!(value[parameter] >= +parameterValue)) {
                let i = resultArray.indexOf(value);
                results = true;
              }
            }
          }
        });
      }

      if (queries[index + 1] === "<") {
        parameterValue = queries[index + 2];

        ienumerable.forEach((value) => {
          if (
            queries[index - 1] === "" ||
            queries[index - 1] === " " ||
            queries[index - 1] === "||"
          ) {
            if (value[parameter] < +parameterValue) {
              if (!resultArray.includes(value)) {
                results = true;
              }
            }
          }
          if (queries[index - 1] === "&&") {
            if (resultArray.includes(value)) {
              if (!(value[parameter] < +parameterValue)) {
                let i = resultArray.indexOf(value);
                results = true;
              }
            }
          }

          count += 1;
        });
      }

      if (queries[index + 1] === "<=") {
        parameterValue = queries[index + 2];

        ienumerable.forEach((value) => {
          if (
            queries[index - 1] === "" ||
            queries[index - 1] === " " ||
            queries[index - 1] === "||"
          ) {
            if (value[parameter] <= +parameterValue) {
              if (!resultArray.includes(value)) {
                results = true;
              }
            }
          }
          if (queries[index - 1] === "&&") {
            if (resultArray.includes(value)) {
              if (!(value[parameter] <= +parameterValue)) {
                let i = resultArray.indexOf(value);
                results = true;
              }
            }
          }
        });
      }
    }

    if (token.includes("@")) {
      parameterValue = queries[index + 2];

      if (queries[index + 1] === ">") {
        ienumerable.forEach((value) => {
          if (
            queries[index - 1] === "" ||
            queries[index - 1] === " " ||
            queries[index - 1] === "||"
          ) {
            if (value > parameterValue) {
              if (!resultArray.includes(value)) {
                results = true;
              }
            }
          }
          if (queries[index - 1] === "&&") {
            if (resultArray.includes(value)) {
              if (!(value > parameterValue)) {
                let i = resultArray.indexOf(value);
                results = true;
              }
            }
          }

          results = true;
        });
      }

      if (queries[index + 1] === ">=") {
        ienumerable.forEach((value) => {
          if (
            queries[index - 1] === "" ||
            queries[index - 1] === " " ||
            queries[index - 1] === "||"
          ) {
            if (value >= parameterValue) {
              if (!resultArray.includes(value)) {
                results = true;
              }
            }
          }
          if (queries[index - 1] === "&&") {
            if (resultArray.includes(value)) {
              if (!(value >= parameterValue)) {
                let i = resultArray.indexOf(value);
                results = true;
              }
            }
          }
        });
      }

      if (queries[index + 1] === "<") {
        ienumerable.forEach((value) => {
          if (
            queries[index - 1] === "" ||
            queries[index - 1] === " " ||
            queries[index - 1] === "||"
          ) {
            if (value < parameterValue) {
              if (!resultArray.includes(value)) {
                results = true;
              }
            }
          }
          if (queries[index - 1] === "&&") {
            if (resultArray.includes(value)) {
              if (!(value < parameterValue)) {
                let i = resultArray.indexOf(value);
                results = true;
              }
            }
          }
        });
      }

      if (queries[index + 1] === "<=") {
        ienumerable.forEach((value) => {
          if (
            queries[index - 1] === "" ||
            queries[index - 1] === " " ||
            queries[index - 1] === "||"
          ) {
            if (value <= parameterValue) {
              if (!resultArray.includes(value)) {
                results = true;
              }
            }
          }
          if (queries[index - 1] === "&&") {
            if (resultArray.includes(value)) {
              if (!(value <= parameterValue)) {
                let i = resultArray.indexOf(value);
                results = true;
              }
            }
          }
        });
      }

      if (queries[index + 1] === "=") {
        ienumerable.forEach((value) => {
          if (
            queries[index - 1] === "" ||
            queries[index - 1] === " " ||
            queries[index - 1] === "||"
          ) {
            if (value == parameterValue) {
              if (!resultArray.includes(value)) {
                results = true;
              }
            }
          }
          if (queries[index - 1] === "&&") {
            if (resultArray.includes(value)) {
              if (!(value == parameterValue)) {
                let i = resultArray.indexOf(value);
                results = true;
              }
            }
          }
        });
      }
    }
  });
  return results;
}

// @ > 30 || @ < 50
