/* cb04_mission01.js
*/

const arr = [ 3, 88, 76, 9, 34, 65 ];

//arr 배열에서 짝수만 +2한 새로운 배열을 만들어 주세요.
const arr2 = arr.map( item => {
    if(item % 2 === 1) {
        return item;
    }
    return item + 2;
});

const arr3 = arr.map( item => item % 2 ? item : item + 2 );

console.log(arr2); // [ 3, 90, 78, 9, 36, 65 ]
console.log(arr3); // [ 3, 90, 78, 9, 36, 65 ]
