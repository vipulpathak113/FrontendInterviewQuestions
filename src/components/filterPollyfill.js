
  let arr = [2,3,4,5];

  Array.prototype.customFilter = function(callback,context){

    var finalArray = [];
    for(var i=0;i<this.length;i++){
      if(callback.call(context,this[i],i,this)){
      finalArray.push(this[i]);
      }
    }
     return finalArray;
  }

var filterArray = arr.customFilter(item=>item>3);
console.log(filterArray)

