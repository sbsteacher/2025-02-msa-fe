/*  fn_mission02.js 

abs를 리턴함수로 만들고 
콘솔에는 "절대값: 리턴한 값" 출력해 주세요.

리턴값이 10이였다

"절대값: 10" 이렇게 콘솔에 출력해 주세요.
*/
function abs(num) {
    return num < 0 ? -num : num;
}
console.log('result1:', abs(-10));
console.log('result2:', abs(10));
console.log('result3:', abs(-30));



