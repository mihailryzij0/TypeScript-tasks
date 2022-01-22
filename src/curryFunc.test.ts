import { curryFunc } from "./curryFunc";

describe('curryFunc',()=>{
  function funcSum(a:number, b:number, c:number,  d: number, e: number) {
    return a + b + c + d + e;
   
  }
  const currySum = curryFunc(funcSum);
it("(1, 2, 3, 4, 5) returns 15", () => {
    expect(currySum(1, 2, 3, 4, 5)).toBe(15);
});


it("(2, 3, 4)(5, 6) returns 20", () => {
    expect(currySum(2, 3, 4)(5, 6)).toBe(20);
});

it("(3, 4)(5, 6)(7) returns 25", () => {
    expect(currySum(3, 4)(5, 6)(7)).toBe(25);
});

it("(4, 5)(6)(7, 8) returns 30", () => {
    expect(currySum(4, 5)(6)(7, 8)).toBe(30);
});

it("(5)(6)(7)(8)(9) returns 35", () => {
    expect(currySum(5)(6)(7)(8)(9)).toBe(35);
});
})