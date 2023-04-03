// Singleton pattern: limit the number of class instantiations to only one time, a class has only one instance, and provide a global access point to access it.

// The Singleton pattern is a type of creational design pattern. For scenarios where only one object is required globally, such as thread pool, global cache, window object, etc.

let Singleton = function(name) {
    this.name = name;
    this.instance = null;
}

Singleton.prototype.getName = function() {
    console.log(this.name);
}

Singleton.getInstance = function(name) {
    if (this.instance) {
        return this.instance;
    }
    return this.instance = new Singleton(name);
}

let Winner = Singleton.getInstance('Winner');
let Looser = Singleton.getInstance('Looser');

console.log(Winner === Looser); // true
console.log(Winner.getName());  // 'Winner'
console.log(Looser.getName());  // 'Winner'