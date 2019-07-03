import { calMaxValue } from "./bag";

test("calMaxValue should return for", () => {
  // const result = calMaxValue([1, 3,2], [1, 10, 2], 4);
  const result = calMaxValue([1, 2,3], [1, 2,3], 4);
  // expect(result).toMatchObject([true, true, false]);
  expect(result).toBe(4)
});
