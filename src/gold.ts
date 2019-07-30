export function getMostGold(
    needLabors: number[],
    values: number[],
    labors: number,
    goldIndex: number,
): number {
    if (needLabors.length === 0 || labors <= 0) {
        return 0;
    }
    let nextGoldIndex = goldIndex + 1;
    if ( needLabors[0] > labors ) {
        return getMostGold(needLabors.slice(1), values.slice(1), labors, nextGoldIndex);
    }
    return Math.max(getMostGold(needLabors.slice(1), values.slice(1), labors, nextGoldIndex),
        getMostGold(needLabors.slice(1), values.slice(1), labors - needLabors[0], nextGoldIndex) + values[0])
}