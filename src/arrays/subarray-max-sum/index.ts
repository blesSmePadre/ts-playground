export const subArrayMaxSum = (arr: number[]) =>
  arr.reduce(
    (acc, value) => {
      const partialSum = value + acc.partial;

      return {
        max: Math.max(partialSum, acc.max),
        partial: partialSum < 0 ? 0 : partialSum,
      };
    },
    { max: 0, partial: 0 }
  ).max;

export {};
