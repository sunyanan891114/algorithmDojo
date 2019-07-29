export function palindromic(str: string): number {
  if (str.length <= 1) {
    return 0;
  }

  if (str.charAt(0) == str.charAt(str.length - 1)) {
    return palindromic(str.substring(1, str.length - 1))
  }

  else {
    return Math.min(
      palindromic(str.substring(1, str.length)),
      palindromic(str.substring(0, str.length - 1))
    ) + 1;
  }
}


export function palindromic1(str: string): number {
  if (str.length <= 1) {
    return 0;
  }

  let total = 0;

  for (let i = 0, j = str.length; i < j;) {
    if (str.charAt(i) == str.charAt(j)) {
      i++;
      j--;
    }
    else {
      total += 1;
      //????
    }
  }
  return total;
}
