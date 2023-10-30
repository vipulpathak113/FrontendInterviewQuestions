// The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.

// Syntax:
// Object.assign(target, source1, source2, /* …, */ sourceN)

const o1 = { a: 1, b: 1, c: 1 };
const o2 = { b: 2, c: 2 };
const o3 = { c: 3 };

const obj = Object.assign({}, o1, o2, o3);
console.log("default Object.assign",obj); // { a: 1, b: 2, c: 3 }

function objectAssign(target, ...sources) {
  for (let source of sources) {
    for (let key of Object.keys(source)) {
      target[key] = source[key];
    }
  }
  return target;
}

const result = objectAssign({}, o1, o2, o3);
console.log("My Object.assign",result); // { a: 1, b: 2, c: 3 }
