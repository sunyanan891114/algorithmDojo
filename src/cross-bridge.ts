//默认personCrossBridgeTime从小到大排列
// export function calculateTotalTime(personCrossBridgeTime: number[]): number {
//   let n=personCrossBridgeTime.length
//   if(n===0){return 0}
//   if(n===1){return personCrossBridgeTime[0]}
//   if(n===2){return personCrossBridgeTime[1]}
//   let left1=personCrossBridgeTime[0]+personCrossBridgeTime[n-1]+calculateTotalTime(personCrossBridgeTime.slice(0,n-1))
//   let left2=personCrossBridgeTime[0]+personCrossBridgeTime[n-1]+2*personCrossBridgeTime[1]+calculateTotalTime(personCrossBridgeTime.slice(0,n-2))
//   return Math.min(left1,left2)
// }

//备忘录
let cost_time: number[]=[0,1,2]
export function calculateTotalTime(personCrossBridgeTime: number[]): number {
  let n=personCrossBridgeTime.length
  if(n===0){
    return 0}
  if(n===1){
    return personCrossBridgeTime[0]}
  if(n===2){
    return personCrossBridgeTime[1]}
  if(!cost_time[n]){
    let left1=personCrossBridgeTime[0]+personCrossBridgeTime[n-1]+calculateTotalTime(personCrossBridgeTime.slice(0,n-1))
    let left2=personCrossBridgeTime[0]+personCrossBridgeTime[n-1]+2*personCrossBridgeTime[1]+calculateTotalTime(personCrossBridgeTime.slice(0,n-2))
    cost_time[n]=Math.min(left1,left2)
    return Math.min(left1,left2)
  }
  return cost_time[n]
}
