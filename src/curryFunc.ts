interface CurriedFunction1 {
  (t1: number): number;
}

interface CurriedFunction2 {
  (t1: number, t2: number): number;

  (t1: number): CurriedFunction1;
}

interface CurriedFunction3 {
  (t1: number, t2: number, t3: number): number;

  (t1: number, t2: number): CurriedFunction1;

  (t1: number): CurriedFunction2;
}

interface CurriedFunction4 {
  (t1: number, t2: number, t3: number, t4: number): number;

  (t1: number, t2: number, t3: number): CurriedFunction1;

  (t1: number, t2: number): CurriedFunction2;

  (t1: number): CurriedFunction3;
}

interface CurriedFunction5 {
  (t1: number, t2: number, t3: number, t4: number, t5: number): number;

  (t1: number, t2: number, t3: number, t4: number): CurriedFunction1;

  (t1: number, t2: number, t3: number): CurriedFunction2;

  (t1: number, t2: number): CurriedFunction3;

  (t1: number): CurriedFunction4;
}

export type CurriedFunction<T> = T extends [
  number,
  number,
  number,
  number,
  number
]
  ? CurriedFunction5
  : T extends [number, number, number, number]
  ? CurriedFunction4
  : T extends [number, number, number]
  ? CurriedFunction3
  : T extends [number, number]
  ? CurriedFunction2
  : T extends [number]
  ? CurriedFunction1
  : never;

type Callback = (...rest: number[]) => number;

export function curryFunc<T extends number[]>(
  fn: (...args: T) => number
): CurriedFunction<T>;

export function curryFunc(func: Callback) {
  return function curried(...args: number[]) {
    if (args.length >= func.length) {
      return func(...args);
    }
    return function (...args2: number[]) {
      return curried(...args.concat(args2));
    };
  };
}
