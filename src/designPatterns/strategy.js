// It is a pattern that encapsulates one or more strategies (or algorithms) to do a task.
// These encapsulated strategies all have the same signature so the context (the one who provides the interface) never knows when they are dealing with the same or different object (or strategy).
// This means that each strategy can be swapped together many times without our program ever realizing it during the lifetime of our app.

// We will use it when there are many options that are independent of each other and can be done at runtime

// Example:
// Shipping product via different vehicle can cost different prices so we will use strategy pattern for it.

//create context
function Shipping(strategy) {
  this.strategy = strategy;
}

//task to do
Shipping.prototype.getShippingCost = function () {
  return this.strategy();
};

//group of startegies
const trainStrategy = function () {
  console.log("Train will cost 1000 rs ");
};

const busStrategy = function () {
  console.log("Bus will cost 500 rs ");
};

const cabStrategy = function () {
  console.log("Cab will cost 800 rs ");
};

const shippedViaTrain = new Shipping(trainStrategy);
const shippedViaBus = new Shipping(busStrategy);
const shippedViaCab = new Shipping(cabStrategy);

shippedViaTrain.getShippingCost(); // return price for train
shippedViaBus.getShippingCost(); // return price for bus
shippedViaCab.getShippingCost(); // return price for cab