/*
  ### Question

  Given an array, transform it into an object type and the key/value must be in the provided array.

  For example:

  ```ts
  const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

  type result = TupleToObject<typeof tuple> // expected { 'tesla': 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
  ```
*/

type TupleToObject<T extends readonly (string | number)[]> = {
    [TProp in T[number]]: TProp
}

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
const tupleNumber = [1, 2, 3, 4] as const
const tupleMix = [1, '2', 3, '4'] as const

type test1 = TupleToObject<typeof tuple>
type test2 = TupleToObject<typeof tupleNumber>
type test3 = TupleToObject<typeof tupleMix>
type error = TupleToObject<[[1, 2], {}]>
