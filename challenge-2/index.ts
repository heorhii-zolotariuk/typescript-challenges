/*
  Implement the built-in `Pick<T, K>` generic without using it.

  Constructs a type by picking the set of properties `K` from `T`

  For example:

  ```ts
  interface Todo {
    title: string
    description: string
    completed: boolean
  }

  type TodoPreview = MyPick<Todo, 'title' | 'completed'>

  const todo: TodoPreview = {
      title: 'Clean room',
      completed: false,
  }
  ```
*/
type MyPick<T, K extends keyof T> = {
    [key in K]: T[key]
}

interface Todo {
    title: string
    description: string
    completed: boolean
}

type test1 = MyPick<Todo, 'title'>
type test2 = MyPick<Todo, 'title' | 'completed'>
type test3 = MyPick<Todo, 'title' | 'completed' | 'invalid'>