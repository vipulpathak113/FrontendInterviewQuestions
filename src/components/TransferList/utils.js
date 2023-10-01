export const intersection = (left, right) => {
  return left.filter((item) => right.includes(item));
};

export const not = (left, right) => {
    return left.filter((item) => !right.includes(item));
  };
