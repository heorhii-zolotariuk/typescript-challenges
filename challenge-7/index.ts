/*
  ### Question

  For given a tuple, you need create a generic `Length`, pick the length of the tuple

  For example:

  ```ts
  type tesla = ['tesla', 'model 3', 'model X', 'model Y']
  type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']

  type teslaLength = Length<tesla>  // expected 4
  type spaceXLength = Length<spaceX> // expected 5
  ```
*/

type Length<T extends readonly (string | number)[]> = T['length']

const tesla = ['tesla', 'model 3', 'model X', 'model Y'] as const
const spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT'] as const

type testType1 = Length<typeof tesla>;
type testType2 = Length<typeof spaceX>;
type testType3 = Length<5>;
type testType4 = Length<'hello world'>;
