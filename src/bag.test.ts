import { calMaxValue } from "./bag";

test("calMaxValue should return for 1 2 3", () => {
  const result = calMaxValue([1, 5], [1, 2], 4);
  expect(result).toBe(1);
});

test("calMaxValue should return for 1 2 3", () => {
  const result = calMaxValue([1, 2, 3], [1, 2, 3], 4);
  expect(result).toBe(4);
});

test("calMaxValue should return for 1 2 3 4", () => {
  const result = calMaxValue([1, 2, 3, 4], [1, 2, 3, 10], 4);
  expect(result).toBe(10);
});
