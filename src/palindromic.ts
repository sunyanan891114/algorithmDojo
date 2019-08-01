export function palindromic(str: string): number {
  if (str.length <= 1) return 0;

  const len = str.length;
  let f: number[][] = []
  for (let i = 0; i < len; i++) {
    f[i] = [];
    for (let j = 0; j < len; j++) {
      f[i][j] = 0;
    }
  }


  for (let j = 1; j < len; j++) {
    for (let i = j-1; i>=0; i--) {
      if (str[i] === str[j]) {
        if (j - i <= 2) {
          continue
        }
        f[i][j] = f[i + 1][j - 1];
        continue
      }
      f[i][j] = Math.min(f[i + 1][j], f[i][j - 1]) + 1;
    }
  }

  return f[0][len - 1];


  // for (let i = 0; i < len; i++) {
  //   let str = ""
  //   for (let j = 0; j < len; j++) {
  //     str += f[i][j] + " "
  //   }
  //   console.log(str)
  // }


  // if (str[0] === str[str.length - 1])
  //   return palindromic(str.slice(1, str.length - 1));

  // return (
  //   Math.min(
  //     palindromic(str.slice(1)),
  //     palindromic(str.slice(0, str.length - 1))
  //   ) + 1
  // );
}
