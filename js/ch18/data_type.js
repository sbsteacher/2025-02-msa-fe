/*
자료형(데이터 유형)
- boolean: 참(true), 거짓(false)
*/

let bool1 = true;
let bool2 = false;

console.log('bool1:', bool1);
console.log('bool2:', bool2);

console.log( 'typeof bool1:', typeof bool1 );
console.log( 'typeof bool1:', typeof(bool1) );

/*
    불린타입은 비교 연산자(관계 연산자)의 결과로 많이 사용이 된다.     
*/
let n1 = 10, n2 = 20;
bool1 = n1 > n2;
console.log('bool1:', bool1);
console.log('n1 > 10:', n1 > 10);
console.log('n1 >= 10:', n1 >= 10);
console.log(' ----------------- ');
console.log('n2 <= 20:', n2 <= 20);
console.log('n2 < 20:', n2 < 20);
console.log(' ----------------- ');
console.log('n1 == n2:', n1 == n2);
console.log('n1 != n2:', n1 != n2);
console.log(' ----------------- 논리 연산자 ! (NOT) ');
console.log(' !(n1 == n2):', !(n1 == n2) );
console.log(' !(n1 != n2):', !(n1 != n2) );

console.log(' ----------------- 논리 연산자 && (AND) ');
console.log(' true && true:', true && true );
console.log(' true && true && false:', true && true && false );

console.log(' ----------------- 논리 연산자 || (OR) ');
console.log(' false || false:', false || false );
console.log(' false || true || false:', false || true || false );