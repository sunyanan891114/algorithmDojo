import { getMostGold } from "./gold";

test("calMaxValue should return for", () => {
    const result = getMostGold(3, 10, [1, 2, 3], [1, 2, 3]);
    expect(result).toMatchObject([true, true, false]);
});