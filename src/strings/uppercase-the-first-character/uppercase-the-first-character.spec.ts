import { ucFirst } from './index';

it.skip('Uppercase the first character', () => {
  expect(ucFirst('john')).toEqual('John');
  expect(ucFirst('')).toEqual('');
});
