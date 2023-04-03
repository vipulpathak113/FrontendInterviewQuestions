

let promise1 = new Promise((resolve, reject) => {
    resolve("This is resolved")
})

let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("This is resolved too")
    }, 2000)
})

let promise3 = 10;

let arrayOfPromises= [promise1, promise2, promise3]

//Promise.all will take array of promises and will resolve if all promises are resolve else reject it

Promise.all(arrayOfPromises).then(res => {
    console.log("native Promise.all", res)
}).catch(err => {
    console.log(err)
})

Promise.myAll = (arrayOfPromises) => {
    return new Promise((resolve, reject) => {
        let result = [];
        let counter = 0
        for (let i = 0; i < arrayOfPromises.length; i++) { // take let instead of var for correct answer
            Promise.resolve(arrayOfPromises[i]).then(data => { // used Promise.resolve here to handle case if taken constant as promise because .then works for only promise
                result[i] = data;
                counter++;
                if (counter === arrayOfPromises.length) {
                    resolve(result)
                }
            }).catch(e => {
                reject(e)
            })

        }
    })
}

Promise.myAll(arrayOfPromises).then(res => {
    console.log("custom Promise.all", res)
}).catch(err => {
    console.log(err)
})


// -----------------------------------------------------------------------------------------

//Promise.any
// The Promise.any() static method takes an iterable of promises as input and returns a single Promise.
// This returned promise fulfills when any of the input's promises fulfills, with this first fulfillment value.
// It rejects when all of the input's promises reject (including when an empty iterable is passed), with an AggregateError containing an array of rejection reasons.

// Imp: use for node >= 15

Promise.myAny = (arrayOfPromises) => {
    return new Promise((resolve, reject) => {
        let errors = [];
        let counter = 0
        for (let i = 0; i < arrayOfPromises.length; i++) { // take let instead of var for correct answer
            Promise.resolve(arrayOfPromises[i]).then(data => { // used Promise.resolve here to handle case if taken constant as promise because .then works for only promise
                resolve(data)
            }).catch(e => {
                counter++;
                errors[i] = e;
                if (counter === arrayOfPromises.length) {
                    reject(new AggregateError(errors,"All promises were rejected"))
                }
            })

        }
    })
}

Promise.any(arrayOfPromises).then(res => {
    console.log("native Promise.any", res)
}).catch(err => {
    console.log(err)
})

Promise.myAny(arrayOfPromises).then(res => {
    console.log("custom Promise.any", res)
}).catch(err => {
    console.log(err)
})

// -----------------------------------------------------------------------------------------

// Promise.race
// The Promise.race() method returns a promise that fulfills or rejects as soon as one of the promises in an iterable fulfills or rejects, with the value or reason from that promise.

Promise.myRace = function(arrayOfPromises) {
    return new Promise((resolve, reject) => {
        arrayOfPromises.forEach((promise) => {
        Promise.resolve(promise)
          .then(resolve, reject) // resolve, when any of the input promise resolves
          .catch(reject); // reject, when any of the input promise rejects
      });
    });
  };


Promise.race(arrayOfPromises).then(res => {
    console.log("native Promise.race", res)
}).catch(err => {
    console.log(err)
})

Promise.myRace(arrayOfPromises).then(res => {
    console.log("custom Promise.race", res)
}).catch(err => {
    console.log(err)
})

// Promise.allSettled
// Promise.allSettled takes an array of promises as input and returns an array with the result of all the promises whether they are rejected or resolved.

// The Promise.allSettled() method returns a promise that fulfills after all of the given promises have either fulfilled or rejected, with an array of objects that each describes the outcome of each promise.

Promise.myAllSettled = function(arrayOfPromises){
   const mappedPromises = arrayOfPromises.map(promise=>{
        return Promise.resolve(promise).then((value)=>{
            return {
                status:"fulfilled", value
            }
        }).catch((reason)=>{
            return {
                status:"rejected", reason
            }
        })
    })

    return Promise.all(mappedPromises)
}

Promise.allSettled(arrayOfPromises).then(res => {
    console.log("native Promise.allSettled", res)
}).catch(err => {
    console.log(err)
})

Promise.myAllSettled(arrayOfPromises).then(res => {
    console.log("custom Promise.myAllSettled", res)
}).catch(err => {
    console.log(err)
})