/* eslint-disable no-extend-native */
let person = {
    firstname: "Vipul",
    lastname: "Pathak",
  };
  
  let printName = function (country) {
    console.log(this.firstname + " " + this.lastname + " from " + country);
  };

// apply pollyfill

Function.prototype.myApply = function (context, ...args) {
    let sym= Symbol();
    context[sym] = this;
    let result = context[sym](...args[0]);
    delete  context[sym];
    return result;
}

printName.myApply(person, ["India"]);