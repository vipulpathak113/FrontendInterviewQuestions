const isObject = (obj) => {
  if (obj !== null && typeof obj === "object") {
    return true;
  }
};

const compareObjects = (obj1, obj2) => {
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);
  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }

  for (let key of obj1Keys) {
    let value1 = obj1[key];
    let value2 = obj2[key];

    var isObjects = isObject(value1) && isObject(value2);

    if (!isObjects && value1 !== value2) {
      return false;
    }

    if (isObjects && !compareObjects(value1, value2)) {
      return false;
    }
  }
  return true;
};

let obj1 = { a: 1, b: 2, c: [4] };
let obj2 = { a: 1, b: 2, c: [4] };
console.log(compareObjects(obj1, obj2));
