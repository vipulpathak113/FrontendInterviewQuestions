function forEach(array, cb) {
  for (var i = 0; i < array.length; i++) {
    cb(array[i], i, array);
  }
}

function map(array, cb) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    newArray.push(cb(array[i], i, array));
  }
  return newArray;
}

function filter(array, cb) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (cb(array[i], i, array)) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

function reduce(array, cb, initialValue) {
  for (var i = 0; i < array.length; i++) {
    initialValue =
      initialValue !== undefined
        ? cb(initialValue, array[i], i, array)
        : array[i];
  }

  return initialValue;
}

function some(array, cb) {
  for (var i = 0; i < array.length; i++) {
    if (cb(array[i], i, array)) {
      return true;
    }
  }
  return false;
}

function every(array, cb) {
  for (var i = 0; i < array.length; i++) {
    if (!cb(array[i], i, array)) {
      return false;
    }
  }
  return true;
}

function flat(arr, depth = 1) {
  var temp = [];

  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) && depth > 0) {
      temp.push(...flat(arr[i], depth - 1));
    } else {
      temp.push(arr[i]);
    }
  }
  return temp;
}

function find(array, cb) {
  for (var i = 0; i < array.length; i++) {
    if (cb(array[i], i, array)) {
      return array[i];
    }
  }
}

module.exports = {
  forEach,
  map,
  filter,
  reduce,
  some,
  every,
  flat,
  find,
};
