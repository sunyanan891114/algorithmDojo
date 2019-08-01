export function fib(n: number): number {
  if (n <= 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

export function fib2(n: number): number {
  if (n <= 2) {
    return n;
  }

  let fibn_1: number = 1;
  let fibn_2: number = 2;
  let total = 0;

  for (let i = 3; i <= n; i++) {
    total = fibn_1 + fibn_2;
    fibn_1 = fibn_2;
    fibn_2 = total;
  }

  return total;
}