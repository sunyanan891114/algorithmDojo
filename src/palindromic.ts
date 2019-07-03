export function palindromic(str: string): number {
  if (str.length <= 1) return 0;
  if (str[0] === str[str.length - 1])
    return palindromic(str.slice(1, str.length - 1));

  return (
    Math.min(
      palindromic(str.slice(1)),
      palindromic(str.slice(0, str.length - 1))
    ) + 1
  );
}
