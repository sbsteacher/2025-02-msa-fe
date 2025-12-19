/* for_array_mission03.js
    배열에 있는 값들을 홀수는 홀수대로 짝수는 짝수대로 모두 더하여
    출력해 주시오.
*/
const arr = [ 3, 8, 11, 86, 43, 22, 27 ]; 
const result = [0, 0];
const resultStr = ['짝수', '홀수'];

for(let i=0; i<arr.length; i++) {
    const item = arr[i];
    result[item % 2] += item;
}

for(let i=0; i<result.length; i++) {
    console.log(`${resultStr[i]}: ${result[i]}`);
}