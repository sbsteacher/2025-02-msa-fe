/* for_array_mission04.js
    배열에서 가장 큰 값과 가장 작은 값을 찾아서 출력해 주세요.
*/
const arr = [ 3, 8, 11, 86, 43, 22, 27 ]; 
let max = arr[0], min = arr[0];

for(let i=1; i<arr.length; i++) {
    if( arr[i] > max ) { max = arr[i]; }
    if( arr[i] < min ) { min = arr[i]; }
}
console.log(`최소값: ${min}, 최대값: ${max}`);
