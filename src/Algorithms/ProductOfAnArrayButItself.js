let nums = [-1, 1, 0, -3, 3];

let res = [];
for (let i = 0; i < nums.length; i++) {
  const mul = nums.reduce((acc, cur) => {
    if (cur !== nums[i]) {
      acc = acc * cur;
    }
    return acc;
  });
  res.push(mul);
}

console.log("res", res);
