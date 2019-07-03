export function calculateTotalTime(personCrossBridgeTime: number[]): number {
  const n = personCrossBridgeTime.length;
  if (n === 0) return 0;
  if (n <= 2) return personCrossBridgeTime[n - 1];

  return Math.min(
    calculateTotalTime(personCrossBridgeTime.slice(0, n - 1)) +
      personCrossBridgeTime[0] +
      personCrossBridgeTime[n - 1],
    calculateTotalTime(personCrossBridgeTime.slice(0, n - 2)) +
      personCrossBridgeTime[0] +
      2 * personCrossBridgeTime[1] +
      personCrossBridgeTime[n - 1]
  );
}
