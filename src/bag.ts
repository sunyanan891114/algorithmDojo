export function calMaxValue(
  spaces: number[],
  values: number[],
  capacity: number
): number {
  let n = values.length
  if (capacity <= 0) return 0;
  if (values.length === 1) return spaces[0] <= capacity ? values[0] : 0;
  if (spaces.length === 0 || values.length === 0) return 0;

  let f: number[][] = []
  for (let i = 0; i < n; i++) {
    f[i] = []
    for (let j = 0; j <= capacity; j++) {
      f[i][j] = 0
    }
  }

  for (let i = 0; i < n; i++) {
    for (let v = 1; v <= capacity; v++) {
      if (i === 0) {
        if (spaces[i] <= v) {
          f[i][v] = values[i]
        }
        continue
      }
      f[i][v] = f[i - 1][v]
      if (spaces[i] <= v) {
        f[i][v] = Math.max(f[i - 1][v],
          f[i - 1][v - spaces[i]] + values[i])
      }
    }
  }

  return f[n - 1][capacity]


  // for (let i = 0; i < n; i++) {
  //   let str = ""
  //   for (let j = 0; j <= capacity; j++) {
  //     str += f[i][j] + " "
  //   }
  //   console.log(str)
  // }

  
  // return Math.max(
  //   //f[i-1][v]
  //   calMaxValue(spaces.slice(1), values.slice(1), capacity),
  //   //f[i-1][v-Ci]+Wi
  //   calMaxValue(spaces.slice(1), values.slice(1), capacity - spaces[0]) +
  //     values[0]
  // );
}
