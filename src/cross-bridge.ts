// export function calculateTotalTime(personCrossBridgeTime: number[]): number {
//   const n = personCrossBridgeTime.length;
//   if (n === 0) return 0;
//   if (n <= 2) return personCrossBridgeTime[n - 1];

//   return Math.min(
//     calculateTotalTime(personCrossBridgeTime.slice(0, n - 1)) +
//       personCrossBridgeTime[0] +
//       personCrossBridgeTime[n - 1],
//     calculateTotalTime(personCrossBridgeTime.slice(0, n - 2)) +
//       personCrossBridgeTime[0] +
//       2 * personCrossBridgeTime[1] +
//       personCrossBridgeTime[n - 1]
//   );
// }

export function calculateTotalTime(personCrossBridgeTime: number[]): number {
  const n = personCrossBridgeTime.length;
  if (n === 0) return 0;
  if (n <= 2) return personCrossBridgeTime[n - 1];

  //fn_1  表示的是f(n-1)
  let fn_1 = personCrossBridgeTime[1]
  let fn_2 = personCrossBridgeTime[0]

  for (let i = 3; i <= n; i++) {

    let fi = Math.min(fn_1+personCrossBridgeTime[0]+personCrossBridgeTime[i-1],
    fn_2+ personCrossBridgeTime[0]+2 * personCrossBridgeTime[1]+personCrossBridgeTime[i-1])

    fn_2 = fn_1
    fn_1 = fi
  }
  return fn_1
  // Math.min(
  //   //opt[i-1]+T[1]+T[i]
  //   calculateTotalTime(personCrossBridgeTime.slice(0, n - 1)) +
  //   personCrossBridgeTime[0] +
  //   personCrossBridgeTime[n - 1],
  //   //opt[i-2]+T[1]+2*T[2]+T[i]
  //   calculateTotalTime(personCrossBridgeTime.slice(0, n - 2)) +
  //   personCrossBridgeTime[0] +
  //   2 * personCrossBridgeTime[1] +
  //   personCrossBridgeTime[n - 1]
  // );
}
