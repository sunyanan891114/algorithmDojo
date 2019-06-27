import { calculateTotalTime } from "./cross-bridge";

test("calculateTotalTime should return 17 for 1 2 5 10", () => {
  expect(calculateTotalTime([1, 2, 5, 10])).toBe(17);
});
