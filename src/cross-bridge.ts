export function calculateTotalTime(personCrossBridgeTime: number[]): number {
  if (personCrossBridgeTime.length <= 2) {
    return personCrossBridgeTime[personCrossBridgeTime.length - 1];
  }

  return Math.min(
    calculateTotalTime(personCrossBridgeTime.slice(0, personCrossBridgeTime.length - 1))
    + personCrossBridgeTime[0]
    + personCrossBridgeTime[personCrossBridgeTime.length - 1],

    calculateTotalTime(personCrossBridgeTime.slice(0, personCrossBridgeTime.length - 2))
    + personCrossBridgeTime[0]
    + 2 * personCrossBridgeTime[1]
    + personCrossBridgeTime[personCrossBridgeTime.length - 1]
  )
}
