/*
  ### Question

  Implement the util type `If<C, T, F>` which accepts condition `C`, a truthy value `T`, and a falsy value `F`. `C` is expected to be either `true` or `false` while `T` and `F` can be any type.

  For example:

  ```ts
  type A = If<true, 'a', 'b'>  // expected to be 'a'
  type B = If<false, 'a', 'b'> // expected to be 'b'
  ```
*/


type If<C extends boolean, T, F> = C extends true ? T : F;

type testType1 = If<true, 'a', 'b'>
type testType2 = If<false, 'a', 2>
type testType3 = If<boolean, 'a', 2>
type error = If<null, 'a', 'b'>
