export const sumMultiple = (a: number) => {
  const internal = (b: number) => {
    return sumMultiple(a + b);
  };

  internal.toString = () => a;

  return internal;
};

export {};
