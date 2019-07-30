import { getMostGold } from "./gold";

test("calMaxValue should return 5 for 1 labor", () => {
    const result = getMostGold([1,5,2,4], [5,11,7,9], 1, 0);
    expect(result).toBe(5);
});

test("calMaxValue should return 7 for 2 labor", () => {
    const result = getMostGold([1,5,2,4], [5,11,7,9], 2, 0);
    expect(result).toBe(7);
});