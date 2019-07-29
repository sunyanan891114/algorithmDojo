export function palindromic(str: string, cachedResult: { [key: string]: number }): number {
    if (str.length <= 1) return 0;
    if (str[0] === str[str.length - 1]) {
        if (!cachedResult[str.slice(1, str.length - 1)]) {
            cachedResult[str.slice(1, str.length - 1)] = palindromic(str.slice(1, str.length - 1), cachedResult)
        }
        return cachedResult[str.slice(1, str.length - 1)];
    }

    if (!cachedResult[str.slice(1)]) {
        cachedResult[str.slice(1)] = palindromic(str.slice(1), cachedResult)
    }
    if (!cachedResult[str.slice(0, str.length - 1)]) {
        cachedResult[str.slice(0, str.length - 1)] = palindromic(str.slice(0, str.length - 1), cachedResult)
    }

    return (
        Math.min(
            cachedResult[str.slice(1)],
            cachedResult[str.slice(0, str.length - 1)]
        ) + 1
    );
}
