import { palindromic } from "./palindromic";

test("palindromic should return 0 when string is empty", () => {
  expect(palindromic("")).toBe(0);
  expect(palindromic('1232')).toBe(1)
});
