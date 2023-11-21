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

// Leading debounce- function is called at the start
// Trailing debounce- function is called at the end

export const debounce = (func,delay,option={leading:false,trailing:true}) => {
  let timer;
  let isLeadingCalled = false;

  return function (...args) {
    let context = this;

    if (timer) clearTimeout(timer);

    if(option.leading && !timer){
      func.apply(context, args);
      isLeadingCalled = true;
    }
    else{
      isLeadingCalled= false;
    }

    timer = setTimeout(() => {
      if(option.trailing && !isLeadingCalled){
        func.apply(context, args);
      }
    }, delay);
  };
};
