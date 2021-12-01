import { fibLoop, fibRec } from './index';

it.skip('Calc n fibonacci number by recursion', () => {
  expect(fibRec(3)).toEqual(2);
  expect(fibRec(7)).toEqual(13);
});

it.skip('Calc n fibonacci number by loop', () => {
  expect(fibLoop(3)).toEqual(2);
  expect(fibLoop(7)).toEqual(13);
  expect(fibLoop(77)).toEqual(5527939700884757);
});
