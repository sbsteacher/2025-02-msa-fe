/* test01.js */

const num1 = 10;

function sum(n1, n2) {
    console.log('n1 + n2 :', n1 + n2);
}

sum(num1, 20);

const fn = () => { console.log('안녕'); } //함수 정의하면 함수의 주소값이 리턴

function test(cb) {
    cb();
}

test(sum);
(function() { console.log('ㅋㅋㅋ'); })();