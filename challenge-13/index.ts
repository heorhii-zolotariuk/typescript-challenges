/*
  ### Question

  Implement the JavaScript `Array.concat` function in the type system. A type takes the two arguments. The output should be a new array that includes inputs in ltr order

  For example:

  ```ts
  type Result = Concat<[1], [2]> // expected to be [1, 2]
  ```
*/

type Concat<T extends readonly unknown[], U extends readonly unknown[]> = [...T, ...U];

const tuple = [1] as const;

type testType1 = Concat<[], []>;
type testType2 = Concat<[], [1]>;
type testType3 = Concat<typeof tuple, typeof tuple>;
type testType4 = Concat<[1, 2], [3, 4]>;
type testType5 = Concat<['1', 2, '3'], [false, boolean, '4']>;

// @ts-expect-error
type error = Concat<null, undefined>
