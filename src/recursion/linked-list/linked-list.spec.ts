import { printSingleLinkedList, printSingleLinkedListReversed } from './index';

it('Print single linked list', () => {
  expect(
    printSingleLinkedList({
      value: 1,
      next: {
        value: 2,
        next: {
          value: 3,
          next: {
            value: 4,
            next: null,
          },
        },
      },
    })
  ).toEqual('1,2,3,4');
});

it('Print single linked list in reversed order', () => {
  expect(
    printSingleLinkedListReversed({
      value: 1,
      next: {
        value: 2,
        next: {
          value: 3,
          next: {
            value: 4,
            next: null,
          },
        },
      },
    })
  ).toEqual('4,3,2,1');
});
