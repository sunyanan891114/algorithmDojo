import { palindromic } from "./palindromic";

test("palindromic should return 0 when string is empty", () => {
  expect(palindromic("123451")).toBe(3);
});
