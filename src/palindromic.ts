// export function palindromic(str: string): number {
//   let n=str.length
//   if(n<=1){return 0}
//   if(str[0]===str[n-1]){return palindromic(str.slice(1,n-1))}
//   else if(str[0]!==str[n-1]){
//     let addBack=palindromic(str.slice(1))
//     let addFront=palindromic(str.slice(0, str.length -1))
//     return Math.min(addBack,addFront)+1
//   }
//   // return 0;
// }

//备忘录算法
let add_num: number[]=[0,0]
export function palindromic(str:string):number{
  let n=str.length
  if(n<=1){return 0}
  if(!add_num[n]){
  if(str[0]===str[n-1]){
    add_num[n]=palindromic(str.slice(1,n-1))
    return palindromic(str.slice(1,n-1))}
  else if(str[0]!==str[n-1]){
    let addBack=palindromic(str.slice(1))
    let addFront=palindromic(str.slice(0, str.length -1))
add_num[n]=Math.min(addBack,addFront)+1
    return Math.min(addBack,addFront)+1
  }
}
return add_num[n]
}
