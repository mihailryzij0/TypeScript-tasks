export function expandedArr(arr: number[][]): number[] {
  const result: number[] = [];
  while (arr.length > 0) {
    arr.shift()?.forEach((i) => result.push(i));
    arr.forEach((i) => result.push(i.pop() || 0));
    arr
      .pop()
      ?.reverse()
      .forEach((i) => result.push(i));
    arr.reverse().forEach((i) => result.push(i.shift() || 0));
    arr.reverse();
  }
  return result;
}
