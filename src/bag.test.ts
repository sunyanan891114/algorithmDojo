import { calMaxValue } from "./bag";

test("calMaxValue should return for", () => {
  const result = calMaxValue([1, 2, 3], [1, 2, 3], 3);
  expect(result).toMatchObject([true, true, false]);
});
