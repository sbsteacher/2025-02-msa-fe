/* cb04.js 배열의 map함수, 새로운 배열을 만든다. 
아이템 값을 변경할 수 있다. 대신 길이가 변하진 않는다.
*/

const arr = [ 3, 88, 76, 9, 34, 65 ];

//아이템 모두 +2 처리한 새로운 배열 생성
//const arr2 = arr.map( item => item + 2 );
const arr2 = arr.map( item => {
    return item + 2;
} );
console.log(arr2);
console.log(arr);