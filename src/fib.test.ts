import { fib } from "./fib";

test("fib 1 should return 1 when input is 1", () => {
  expect(fib(1)).toBe(1);
});

test("fib 2 should return 2 when input is 2", () => {
  expect(fib(2)).toBe(2);
})

test("fib 3 should return 3 when input is 3", () => {
  expect(fib(3)).toBe(3);
})

test("fib 4 should return 5 when input is 4", () => {
  expect(fib(4)).toBe(5);
})

test("fib 5 should return 8 when input is 5", () => {
  expect(fib(5)).toBe(8);
  console.log(fib(10))
})


