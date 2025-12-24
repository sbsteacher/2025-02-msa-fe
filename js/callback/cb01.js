/* cb01.js
함수 주소값을 알면(저장되어 있다면) 함수 호출할 수 있다.

A함수한테 B함수 주소값을 보내면 A함수가 B함수를
호출할 수 있는 상태

함수형 프로그래밍!
*/

//sum변수에 함수의 주소값이 저장
function sum(n1, n2) { return n1 + n2; }

function calc(fn, n1, n2) { //fn에는 sum함수의 주소값
    return fn(n1, n2);
}
const result = calc(sum, 10, 20);
console.log('result:', result);