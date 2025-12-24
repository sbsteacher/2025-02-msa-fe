/* cb03.js 배열의 filter함수, 배열에서 필요한 아이템들만 쏙 뽑아서 
새로운 배열을 만들때 사용
*/

const arr = [ 3, 88, 76, 9, 34, 65 ];

//const oddArr = arr.filter(item => item % 2);
const oddArr = arr.filter( (item) => {
    return item % 2 === 1;
} );
console.log(oddArr);
console.log(arr);