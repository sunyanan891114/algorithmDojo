import { maxHeaderSize } from "http";

// export function calMaxValue(
//   spaces: number[],
//   values: number[],
//   capacity: number//总体容量
// ): number {
//   let n:number=spaces.length
//   if(capacity<=0){return 0}
  
// if(n<=0 || values.length<=0){return 0}
// if(n===1){if(spaces[0]>capacity){
//   return 0
// }else{
//   return values[0]
//   }
// }
//   // console.log('values', values, spaces, capacity)
//   let isNotPutValues=calMaxValue(spaces.slice(0,n-1),values.slice(0,n-1),capacity)
//   // console.log('isNotPutValues',isNotPutValues)
//   // console.log(' sdd values', values, spaces, capacity)
//   let isPutValues
//   if(capacity<spaces[n-1]){isPutValues=calMaxValue(spaces.slice(0,n-1),values.slice(0,n-1),capacity) 
//   }else{
//     isPutValues=calMaxValue(spaces.slice(0,n-1),values.slice(0,n-1),capacity-spaces[n-1])+values[n-1]
//   }
// return  Math.max(isNotPutValues,isPutValues)
// }



//备忘录
export function calMaxValue(spaces: number[],
values: number[],
capacity: number//总体容量
): number {
  let total_values: number[]=[0]
  let n:number=spaces.length
  if(capacity<=0){return 0}
  if(n<=0 || values.length<=0){return 0}
if(n===1){if(spaces[0]>capacity){
  return 0
}else{
  return values[0]
  }
}

if(!total_values[n]){
  let isNotPutValues=calMaxValue(spaces.slice(0,n-1),values.slice(0,n-1),capacity)
  let isPutValues
  if(capacity<spaces[n-1]){isPutValues=calMaxValue(spaces.slice(0,n-1),values.slice(0,n-1),capacity) 
  }else{
    isPutValues=calMaxValue(spaces.slice(0,n-1),values.slice(0,n-1),capacity-spaces[n-1])+values[n-1]
  }
  total_values[n]=Math.max(isNotPutValues,isPutValues)
  return Math.max(isNotPutValues,isPutValues)
}
return total_values[n]
}
