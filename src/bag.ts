export function calMaxValue(
  spaces: number[],
  values: number[],
  capacity: number
): number {
  if (capacity <= 0) return 0;
  if (values.length === 1) return spaces[0] <= capacity ? values[0] : 0;
  if (spaces.length === 0 || values.length === 0) return 0;

  return Math.max(
    calMaxValue(spaces.slice(1), values.slice(1), capacity),
    calMaxValue(spaces.slice(1), values.slice(1), capacity - spaces[0]) +
      values[0]
  );
}