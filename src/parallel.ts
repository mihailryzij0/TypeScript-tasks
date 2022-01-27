export class Parallel {
  private readonly streams;

  constructor(n: number) {
    this.streams = n;
  }

  async jobs(...args: Array<() => Promise<number>>): Promise<number[]> {
    const jobs = [...args];

    return new Promise((resolve) => {
      const result: number[] = [];

      const steps = (): void => {
        const job = jobs.shift();
        if (job) {
          job().then((value: number) => {
            result.push(value);
            if (result.length === args.length) return resolve(result);
            return steps();
          });
        }
      };

      for (let i = 0; i < this.streams; i += 1) steps();
    });
  }
}
