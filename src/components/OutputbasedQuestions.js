var p = new Promise((resolve, reject) => {
    reject(Error("The Fails!"));
  });
  p.catch((error) => console.log(error.message));
  p.catch((error) => console.log(error.message));
  
  // ------------------------------
  
  var p2 = new Promise((resolve, reject) => {
    reject(Error("The Fails2"));
  })
    .catch((error) => console.log(error.message))
    .then((error) => console.log(error));
  
  // ------------------------------
  
  new Promise((resolve, reject) => {
    resolve("Success!");
  })
    .then(() => {
      throw Error("Oh noes!");
    })
    .catch((error) => {
      return "actually, that worked";
    })
    .then((message) => console.log(message));
  
  // ------------------------------
  
  Promise.resolve("Success!")
    .then((data) => {
      return data.toUpperCase();
    })
    .then((data) => {
      console.log(data);
    });
  
  // ------------------------------
  
  Promise.resolve("Success!")
    .then(() => {
      throw Error("Oh noes22!");
    })
    .catch((error) => {
      return "actually, that worked22";
    })
    .then((data) => {
      throw Error("The fails22!");
    })
    .catch((error) => console.log(error.message));
  
  // ------------------------------
  const promise = new Promise((res) => res(2));
  promise
    .then((v) => {
      console.log(v);
      return v * 2;
    })
    .then((v) => {
      console.log(v);
      return v * 2;
    })
    .finally((v) => {
      console.log(v, "finally");
      return v * 2;
    })
    .then((v) => {
      console.log(v);
    });
  
  // ------------------------------
  const person = {
    name: "Vipul",
    getName: function () {
      return `${this.name} is my name`;
    }
  };
  console.log(person.getName());
  
  // ------------------------------
  
  function test() {
    console.log("this", this);
  }
  test();
  
  // ------------------------------
  
  const person2 = {
    name: "Vipul",
    getName: () => {
      return `${this.name} is my name`;
    }
  };
  console.log(person2.getName());
  
  // ------------------------------
  
  function User() {
    this.name = "John Doe";
    this.score = 20;
    this.sayUser = function () {
      // when `this` is accessible
      console.log("sayuser", this.name); //John Doe
  
      function innerFunction() {
        // when `this` refers to the global scope/object
        console.log("inner", this.name); // undefined
      }
  
      innerFunction();
    };
  }
  let name2 = new User();
  name2.sayUser();
  
  // ------------------------------
  
  function User2() {
    this.name2 = "John Doe";
    this.score = 20;
    this.sayUser = function () {
      // when `this` is accessible
      console.log(this.name2); //John Doe
  
      const innerFunction = () => {
        // when `this` refers to previous context
        console.log(this.name2); //John Doe
      };
  
      innerFunction();
    };
  }
  let name3 = new User2();
  name3.sayUser();
  