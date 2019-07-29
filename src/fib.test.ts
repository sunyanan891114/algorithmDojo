import { fib } from "./fib";

test("fib 1 should return 1 when input is 1", () => {
  expect(fib(10,{})).toBe(89);
});
