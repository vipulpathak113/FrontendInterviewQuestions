
  let arr = [2,3,4,5];

  Array.prototype.customMap = function(callback){

    var finalArray = [];
    for(var i=0;i<this.length;i++){
      finalArray.push(callback(this[i],i,this));
    }
     return finalArray;
  }

  arr.customMap(item=>{
    console.log(item);
  })

