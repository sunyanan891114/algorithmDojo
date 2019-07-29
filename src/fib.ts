export function fib(n: number, cachedResult: { [key: number]: number }): number {
    if (n < 1) return 0;
    if (n === 1) return 1;
    if (n === 2) return 2;
    if (!cachedResult[n]) {

        cachedResult[n] = fib(n - 1,cachedResult) + fib(n - 2,cachedResult);
    }
    return cachedResult[n]
}
