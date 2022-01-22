export class Parallel {
  private readonly streams;

  constructor(n: number) {
    this.streams = n;
  }

  async jobs(...args: Array<() => Promise<number>>): Promise<number[]> {
    const result: number[] = [];

    const steps = (): void => {
      const items = args.shift();
      if (items) {
        items().then((value: number) => {
          result.push(value);
        });

        if (result.length === args.length) return undefined;
        return steps();
      }
      return undefined;
    };

    for (let i = 0; i < this.streams; i += 1) steps();

    return result;
  }
}
