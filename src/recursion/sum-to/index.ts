export const sumTo = (to: number): number => {
  if (to < 1) {
    return to;
  }

  if (to === 1) {
    return 1;
  }

  return to + sumTo(to - 1);
};
