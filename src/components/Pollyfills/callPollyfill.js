/* eslint-disable no-extend-native */
let person = {
  firstname: "Vipul",
  lastname: "Pathak",
};

let printName = function (country) {
  console.log(this.firstname + " " + this.lastname + " from " + country);
};

// Call Pollyfill

Function.prototype.myCall = function (context, ...args) {
  let sym = Symbol();
  context[sym] = this;
  let result = context[sym](...args);
  delete context[sym];
  return result;
};

printName.myCall(person, "India");
