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


export function calMaxValue2(
  spaces: number[],
  values: number[],
  capacity: number): number {

  let c: number[][] = [];
  let maxValue = 0;
  let tmpValue = 0;

  for (let f = 0; f < values.length; f++) {
    c.push([])
    c[0][f] = 0;
  }


  for (let i = 1; i < values.length; i++) {
    c[i][0] = 0;
    for (let w = 1; w < capacity; w++) {
      if (spaces[i] <= w) {
        if (values[i] + c[i - 1][w - spaces[i]] > c[i - 1][w]) {
          tmpValue = values[i] + c[i - 1][w - spaces[i]];
        }
        else {
          tmpValue = c[i - 1][w]
        }
      }
      else {
        tmpValue = c[i - 1][w];
      }
      c[i][w] = tmpValue;
      console.log(tmpValue)
      maxValue = maxValue > tmpValue ? maxValue : tmpValue;
    }
  }

  return maxValue;

}