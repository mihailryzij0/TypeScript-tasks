export function sum(a: number) {
  const res = a || 0;

  function innerSum(b: number) {
    return sum(a + b);
  }
  innerSum.toString = () => res;

  return innerSum;
}
