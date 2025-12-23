/* arr_swapping.js 

0번방 값과 1번방 값을 교환하는 작업
*/

const arr = [ 10, 20 ];
// start와 end사이에는 10, 20 리터럴 사용 금지!!!
//  -- start, 

const temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;

// -- end
console.log(arr);  // [ 20, 10 ]