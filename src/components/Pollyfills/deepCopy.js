const deepCopy = (obj) => {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  const newObj = Array.isArray(obj) ? [] : {};

  for (const key in obj) {
    newObj[key] = deepCopy(obj[key]);
  }

  return newObj;
};

let val = { a: { b: 1 } };
let result = deepCopy(val);
result.a.b = 2;
console.log(result, val); // val will not be changed
