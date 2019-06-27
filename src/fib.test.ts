import { fib } from "./fib";

test("fib 1 should return 1 when input is 1", () => {
  expect(fib(1)).toBe(1);
});
