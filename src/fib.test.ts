import { fib } from "./fib";

test("fib 1 should return 1 when input is 1", () => {
  expect(fib(1)).toBe(1);
  console.log(fib(10))
  expect(fib(10)).toBe(89);
});
