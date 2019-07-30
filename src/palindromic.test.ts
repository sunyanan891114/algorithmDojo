import { palindromic } from "./palindromic";

test("palindromic should return 0 when string is empty", () => {
  expect(palindromic("")).toBe(0);
});

test("palindromic should return 2 when string is 123", () => {
  expect(palindromic("123")).toBe(2);
});

test("palindromic should return 1 when string is 1231", () => {
  expect(palindromic("1231")).toBe(1);
});

test("palindromic should return 0 when string is 11", () => {
    expect(palindromic("11")).toBe(0);
});

