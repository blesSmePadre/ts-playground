import { SingleLinkedList } from './types';

export const printSingleLinkedList = (list: SingleLinkedList): string => {
  return `${list.value}${
    list.next ? `,${printSingleLinkedList(list.next)}` : ''
  }`;
};

export const printSingleLinkedListReversed = (
  list: SingleLinkedList
): string => {
  return `${list.next ? `${printSingleLinkedListReversed(list.next)},` : ''}${
    list.value
  }`;
};
