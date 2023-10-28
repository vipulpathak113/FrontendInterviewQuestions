//   Throttling is a technique in which, no matter how many times the user fires the event,
//   the attached function will be executed only once in a given time interval.

export const customThrottle = (func) => {
  let throttleTime = false;

  return function (...args) {
    let context = this;

    if (!throttleTime) {
      func.apply(context, args);
      throttleTime = true;
      setTimeout(() => {
        throttleTime = false;
      }, 500);
    }
  };
};
