import { Parallel } from "./parallel";

describe("", () => {
  it("Parallel should run expected number of jobs in parallel", async () => {
    const runner = new Parallel(2);

    const result = runner.jobs(
      () =>
        new Promise((resolve) => {
          setTimeout(resolve, 10, 1);
        }),
      () =>
        new Promise((resolve) => {
          setTimeout(resolve, 50, 2);
        }),
      () =>
        new Promise((resolve) => {
          setTimeout(resolve, 20, 3);
        }),
      () =>
        new Promise((resolve) => {
          setTimeout(resolve, 90, 4);
        }),
      () =>
        new Promise((resolve) => {
          setTimeout(resolve, 30, 5);
        })
    );
    setTimeout(() => {
      expect(result).toStrictEqual([1, 3, 5, 2, 4]);
    }, 1000);
  });
});
