/* eslint-disable no-extend-native */
let person = {
  firstname: "Vipul",
  lastname: "Pathak",
};

let printName = function (country) {
  console.log(this.firstname + " " + this.lastname + " from " + country);
};

// bind pollyfill

Function.prototype.mybind = function (context, ...args) {
  let func = this;
  return function (...args2) {
    func.apply(context, [...args, ...args2]);
  };
};

let newPrintName = printName.mybind(person, "India");
newPrintName();
