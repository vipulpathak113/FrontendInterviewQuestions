// The prototype pattern is a useful way to share properties among many objects of the same type.
// The prototype is an object that's native to JavaScript, and can be accessed by objects through the prototype chain.

function Car(wheels, engines) {
  this.wheels = wheels;
  this.engines = engines;

  this.drive = function () {
    console.log("car is driving");
  };
}

function CarPrototype(proto) {
  this.proto = proto;
  this.clone = function () {
    const car = new Car();
    car.wheels = proto.wheels;
    car.engines = proto.engines;
    return car;
  };
}

function run() {
  let car = new Car(4, 2);
  let prototype = new CarPrototype(car);
  let car1 = prototype.clone();
  let car2 = prototype.clone();
  car1.drive();
  car2.drive();
}

run();
