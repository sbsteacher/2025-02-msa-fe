/* cb03_mission01.js */

const arr = [ 3, 88, 76, 9, 34, 65 ];

//arr배열에서 70이하 값들만 있는 새로운 배열을 만들어 주세요.
const arr2 = arr.filter( (item, i) => item <= 70 );
console.log(arr2);

//arr배열에서 앞의 4개의 숫자만 (3, 88, 76, 9) 살린 새로운 배열을 만들어 주세요.
const arr3 = arr.filter( (item, i) => i < 4 );
console.log(arr3);