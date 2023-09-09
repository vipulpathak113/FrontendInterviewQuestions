/* eslint-disable no-extend-native */
/* eslint-disable eqeqeq */

  let arr = [2,3,4,5];

  Array.prototype.customReduce = function(fn,initial){

    var values = this;
    values.forEach(item=>{
      initial = initial!=undefined?fn(initial,item):item;
    })
    return initial
  }

var reduceArray = arr.customReduce((a,b)=>a+b);
console.log(reduceArray)

