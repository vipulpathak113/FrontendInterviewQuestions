let arr = [1, 2, 3, 4];
let sumarr = arr.reduce((acc = 1, current) => (acc = acc * current));
let result = [];

for (let i = 0; i < arr.length; i++) {
  let current = sumarr / arr[i];
  result.push(current);
}

console.log(result);
