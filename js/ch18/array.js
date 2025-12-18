/* p.609  array.js 
변수, 상수 값 1개 저장할 수 있다. 

숫자 5개를 저장하여 사용해야되는 상황이 발생!

여러값을 한 곳에 담기 위해 배열을 사용, 구분을 index(숫자)로 한다.
index(방 번호)는 0번 부터 시작
*/

let num1 = 5, num2 = 10, num3 = 15, num4 = 20, num5 = 25;

// []대괄호는 배열 생성, 공간 할당&초기화 마친 상태
const arr = [ 5, 10, 15, 20, 25 ];  //arr은 배열의 주소값이 저장
const arr2 = new Array(2000); //배열 공간만 할당, 값은 넣지 않은 상태

const arr3 = [];

arr3.push(1);
arr3.push(2);
arr3.push(3);
arr3.push(30);
console.log('arr3.length:', arr3.length);
// Array생성자 함수 


console.log('arr.length:', arr.length);
console.log('arr2.length:', arr2.length);
console.log('arr2[0]:', arr2[0]);
arr[1] = 11;
console.log(arr[0], arr[1], '...', arr[4]);
console.log('arr[5]:', arr[5]);