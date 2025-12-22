/* fn03.js

함수는 한가지 일만 하도록 정의를 한다. 그래야 재활용성이 높다.
함수가 함수를 호출할 수 있습니다. 

함수가 나 자신을 호출할 수 있다. (재귀호출)
*/

function add(n1, n2) { return n1 + n2; }

function pow(num) { return num * num; }

function addAndPow(n1, n2) {
    const result = add(n1, n2);
    return pow(result);
}

const r1 = addAndPow(3, 4);
console.log('r1:', r1);
