/*
  ### Question

  Implement the built-in `Exclude<T, U>`

  > Exclude from `T` those types that are assignable to `U`

  For example:

  ```ts
  type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'
  ```
*/

type MyExclude<T, U> = T extends U ? never : T;

type testType1 = MyExclude<'a' | 'b' | 'c', 'a'>;
type testType2 = MyExclude<'a' | 'b' | 'c', 'a' | 'b'>;
type testType3 = MyExclude<string | number | (() => void), Function>
