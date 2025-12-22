/* fn04.js 
함수를 만들 때 function 키워드를 사용했다.
자바스크립트에서 함수는 1급 객체이다.
즉, 주소값을 가질 수 있다. 
*/

//sum이라고하는 변수에 함수 주소값이 저장되어 있는거다.
function sum(n1, n2) {
    console.log('sum:', n1 + n2);
}

const con1 = sum; //
console.log(typeof con1);
con1(20, 30);

console.log('1:', sum);
sum(10, 20);
sum = 'abc';
console.log('2:', sum);
