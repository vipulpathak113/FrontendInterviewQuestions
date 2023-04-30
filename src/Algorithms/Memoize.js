function memoize(fn) {
  let cache = {};
  return function (...args) {
    let argsString = JSON.stringify(args);
    if (cache[argsString] === undefined) cache[argsString] = fn(...args);
    return cache[argsString];
  };
}

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
  callCount += 1;
  return a + b;
});
memoizedFn(2, 3); // 5
memoizedFn(2, 3); // 5
console.log("callCount", callCount); // 1
