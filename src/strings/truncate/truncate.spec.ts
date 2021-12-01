import { truncate } from './index';

it.skip('Truncate the text', () => {
  expect(truncate('', 20)).toEqual('');
  expect(truncate('Hello!', 20)).toEqual('Hello!');
  expect(truncate('Hi! What the matter with you?', 8)).toEqual('Hi! What...');
});
