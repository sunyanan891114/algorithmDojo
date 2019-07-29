// export function fib(n: number): number {
//   if(n<=2){return n}
  
//   return fib(n-1)+fib(n-2);
// }

//备忘录算法
let cachedResult: number[]=[0,1,2]
export function fib( n: number ): number {
  if (!cachedResult[n]) {
  cachedResult[n] = fib(n-1) + fib(n-2); 
}
  return cachedResult[n] 
}

  //自底向上
// export function getClimbingWays(n: number, ): number { if (n < 1) {return 0;}
// if (n === 1) {return 1;} if (n === 2) {return 2;} let a = 1;
// let b = 2;
// let tempResult: number = 0; for ( let i = 3; i < n; ++i) {
// tempResult = a + b; a = b;
// b = tempResult;
// }
// return tempResult; }
