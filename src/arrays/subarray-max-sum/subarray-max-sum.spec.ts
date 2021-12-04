/* eslint-disable @typescript-eslint/restrict-template-expressions */

import { subArrayMaxSum } from './index';

it('Get subarray with max sum', () => {
  expect(subArrayMaxSum([-1, 2, 3, -9])).toEqual(5);
  expect(subArrayMaxSum([-1, 2, 3, -9, 11])).toEqual(11);
  expect(subArrayMaxSum([2, -1, 2, 3, -9])).toEqual(6);
  expect(subArrayMaxSum([-2, -1, 1, 2])).toEqual(3);
  expect(subArrayMaxSum([100, -9, 2, -3, 5])).toEqual(100);
  expect(subArrayMaxSum([1, 2, 3])).toEqual(6);
});
