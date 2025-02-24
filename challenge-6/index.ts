/*
  ### Question

  Implement a generic `First<T>` that takes an Array `T` and returns its first element's type.

  For example:

  ```ts
  type arr1 = ['a', 'b', 'c']
  type arr2 = [3, 2, 1]

  type head1 = First<arr1> // expected to be 'a'
  type head2 = First<arr2> // expected to be 3
  ```
*/

type First<T extends any[]> = T['length'] extends 0 ? never : T[0];

type test1 = First<[3, 2, 1]>;
type test2 = First<[() => 123, { a: string }]>;
type test3 = First<[]>;
type test4 = First<[undefined]>;
