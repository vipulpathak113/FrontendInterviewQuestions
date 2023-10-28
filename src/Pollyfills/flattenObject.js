const obj = {
  A: "12",
  B: 23,
  C: {
    P: 23,
    O: {
      L: 56,
    },
    Q: [1, 2],
  },
};

const flattenObject = (obj, parent) => {
  var result = {};

  const getFlattenObject = (obj, parent) => {
    for (let key in obj) {
      let newparent = parent + key;
      let value = obj[key];
      if (typeof value === "object") {
        getFlattenObject(value, newparent + ".");
      } else {
        result[newparent] = value;
      }
    }
  };

  getFlattenObject(obj, parent);
  return result;
};

console.log(flattenObject(obj, ""));


