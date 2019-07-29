import { calMaxValue, calMaxValue1 } from "./bag";

test("calMaxValue should return for", () => {
  const result = calMaxValue([1, 2, 3], [1, 2, 3], 3, 0);
  expect(result).toBe(3);
});

test.only("calMaxValue should return for", () => {
  const result = calMaxValue1([3, 2, 1], [3, 2, 1], 4);
  expect(result).toBe(3);
});

test("calMaxValue should return for", () => {
  const result = calMaxValue([1, 2, 3], [1, 2, 3], 5, 0);
  expect(result).toBe(5);
});

test("calMaxValue should return for", () => {
  const result = calMaxValue([1, 3, 8], [2, 5, 9], 15, 0);
  expect(result).toBe(16);
});


test("calMaxValue1 should return for", () => {
  const result = calMaxValue1([1, 2, 3], [1, 2, 3], 3);
  expect(result).toBe(3);
});

test("calMaxValue1 should return for", () => {
  const result = calMaxValue1([1, 2, 3], [1, 2, 3], 5);
  expect(result).toBe(5);
});

test("calMaxValue1 should return for", () => {
  const result = calMaxValue1([1, 3, 8], [2, 5, 9], 15);
  expect(result).toBe(16);
});