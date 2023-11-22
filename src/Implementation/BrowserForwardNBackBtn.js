class BrowserHistory {
  constructor() {
    this.history = [];
    this.index = -1;

    this.visit = function (url) {
      this.history[++this.index] = url;
    };

    this.current = function () {
      if (this.index < 0) {
        return "Blank Page";
      }
      return this.history[this.index];
    };

    this.backward = function () {
      this.index = Math.max(-1, --this.index);
    };

    this.forward = function () {
      this.index = Math.min(this.history.length - 1, ++this.index);
    };
  }
}

let bh= new BrowserHistory();
console.log(bh.current());
bh.visit("a");
bh.visit("b");
console.log(bh.current());
bh.backward();
console.log(bh.current());
bh.forward()
console.log(bh.current());

