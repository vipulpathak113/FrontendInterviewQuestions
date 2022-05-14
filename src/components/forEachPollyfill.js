import React from 'react';

function forEachPollyfill() {

    Array.prototype.CustomforEach = function (callback,thisArg) {

        if (typeof callback !== 'function') {
            throw new TypeError(callback + ' is not a function');
          }

        var array = this; 
        thisArg = thisArg || this;

        var i = 0;
        while (i < array.length) {
          callback(thisArg,array[i], i, array);
          i++;
        }
      };

      let arr = [2,3,4,5];

      arr.CustomforEach(elem=>{
          console.log(elem)
      })


    return (
        <div>
            
        </div>
    );
}

export default forEachPollyfill;