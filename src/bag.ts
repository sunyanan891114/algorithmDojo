export function calMaxValue(
  spaces: number[],
  values: number[],
  capacity: number,
  index: number
): number {
  if (index == spaces.length || capacity <= 0) {
    return 0;
  }
  let next = index + 1;
  return Math.max(calMaxValue(spaces, values, capacity, next),
    calMaxValue(spaces, values, capacity - spaces[index], next) + values[index])
}

export function calMaxValue1(
  spaces: number[],
  values: number[],
  capacity: number): number {
  if (spaces.length == 0 || capacity <= 0) {
    return 0;
  }
  return Math.max(calMaxValue1(spaces.slice(1), values.slice(1), capacity),
    calMaxValue1(spaces.slice(1), values.slice(1), capacity - spaces[0]) + values[0])
}
