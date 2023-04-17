// Debounce function limits the execution of a function call and waits for a certain amount of time before running it again.

export const customDebounce = (func) => {
  let timer;

  return function (...args) {
    let context = this;

    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      func.apply(context, args);
    }, 500);
  };
};
