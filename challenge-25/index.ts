/*
  ### Question

  For given function type `Fn`, and any type `A`. Create a generic type which will take `Fn` as the first argument, `A` as the second, and will produce function type `G` which will be the same as `Fn` but with appended argument `A` as a last one.

  For example,

  ```typescript
  type Fn = (a: number, b: string) => number

  type Result = AppendArgument<Fn, boolean>
  // expected be (a: number, b: string, x: boolean) => number
  ```
*/
/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '../utils'

type AppendArgument<Fn extends Function, A> = Fn extends (...args: infer R) => infer T ? (...args: [...R, A]) => T : never;

type Case1 = AppendArgument<(a: number, b: string) => number, boolean>
type Result1 = (a: number, b: string, x: boolean) => number

type Case2 = AppendArgument<() => void, undefined>
type Result2 = (x: undefined) => void

type cases = [
    Expect<Equal<Case1, Result1>>,
    Expect<Equal<Case2, Result2>>,
    // @ts-expect-error
    AppendArgument<unknown, undefined>,
]
