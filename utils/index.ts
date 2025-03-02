export type Equal<T, U> = (<G>() => G extends T ? 1 : 2) extends (<G>() => G extends U ? 1 : 2) ? true : false;
export type Expect<T extends true> = T;
export type Alike<T, U> = T extends U ? (U extends T ? true : false) : false;