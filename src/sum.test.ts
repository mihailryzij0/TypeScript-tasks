import { sum } from "./sum";

describe("sum", () => {
  it("", () => {
    expect(+sum(2)(2)(1)).toBe(5);
    expect(+sum(3)(2)(1)).toBe(6);
    expect(+sum(4)(2)(1)).toBe(7);
  });
});
