export function sum(a: number): any {
  const res = a || 0;

  function innerSum(b: number): () => number {
    return sum(a + b);
  }
  innerSum.toString = () => res;

  return innerSum;
}
