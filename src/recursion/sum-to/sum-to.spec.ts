import { sumTo } from './index';

it('Sum n numbers from 1', () => {
  expect(sumTo(0)).toEqual(0);
  expect(sumTo(100)).toEqual(5050);
});
