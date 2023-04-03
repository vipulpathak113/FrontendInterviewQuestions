// The Observer pattern offers a subscription model in which objects subscribe to an event and get notified when the event occurs.

class Subscriber {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  notify(msg) {
    console.log(`${this.name} received message ${msg}`);
  }
}

class YoutubeChannel {
  subscription = [];

  subscribe(sub) {
    this.subscription.push(sub);
  }

  unsubscribe(sub) {
    this.subscription.filter((item) => item.id != sub.id);
  }

  publish(msg) {
    for (let sub of this.subscription) {
      sub.notify(msg);
    }
  }
}

let sub1 = new Subscriber(1, "test1");
let sub2 = new Subscriber(2, "test2");
let sub3 = new Subscriber(3, "test3");

let channel = new YoutubeChannel();
channel.subscribe(sub1);
channel.subscribe(sub2);
channel.subscribe(sub3);

channel.publish("new video added");
