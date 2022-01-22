type Callback = (...rest: number[]) => any;

export function curryFunc(func: Callback) {
  return function curried(...args: number[]) {
    if (args.length >= func.length) {
      return func.apply(curried, args);
    }
    return function (...args2: number[]) {
      return curried.apply(curried, args.concat(args2));
    };
  };
}
