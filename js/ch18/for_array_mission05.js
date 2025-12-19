/* for_array_mission05.js
for-of를 활용하여 배열의 모든 값을 더한 뒤 출력해 주세요.
*/
const arr = [ 3, 8, 11, 86, 43, 22, 27 ]; 
let sum = 0;
for(const item of arr) {
    sum += item;
}
console.log('sum: ', sum);