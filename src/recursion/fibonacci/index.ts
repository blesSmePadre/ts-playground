export const fibRec = (n: number): number => {
  return n <= 1 ? n : fibRec(n - 1) + fibRec(n - 2);
};

export const fibLoop = (n: number): number => {
  let a = 1;
  let b = 1;

  for (let i = 3; i <= n; i += 1) {
    const c = a + b;

    a = b;
    b = c;
  }

  return b;
};
