/* eslint-disable @typescript-eslint/restrict-template-expressions */

import { sumMultiple } from './index';

it.skip('Sum multiple', () => {
  expect(`${sumMultiple(2)(3)(4)}`).toEqual('9');
});
