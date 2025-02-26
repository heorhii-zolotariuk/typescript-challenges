/*
  ### Question

  If we have a type which is a wrapped type like Promise, how can we get the type which is inside the wrapped type?

  For example: if we have `Promise<ExampleType>` how to get ExampleType?

  ```ts
  type ExampleType = Promise<string>

  type Result = MyAwaited<ExampleType> // string
  ```
*/

type MyAwaited<T> = T extends PromiseLike<infer Val> ? MyAwaited<Val> : T;

type X = Promise<string>;
type Y = Promise<{ field: number }>;
type Z = Promise<Promise<string | number>>;
type Z1 = Promise<Promise<Promise<string | boolean>>>;
type T = { then: (onfulfilled: (arg: number) => any) => any };


type testType1 = MyAwaited<X>;
type testType2 = MyAwaited<Y>;
type testType3 = MyAwaited<Z>;
type testType4 = MyAwaited<Z1>;
type testType5 = MyAwaited<T>;
