/* while.js 
    반복문

    while(조건) { 
        조건이 true인 동안 반복한다.
    }

    정확히 몇 번 반복할지 알고 있을 때는 for사용
    멈춰야되는 조건만 알고 있을 때는 while사용
*/
let i=0;
while(i < 10) { 
    console.log('i: ', i);
    i++;
}
console.log('-----------');
for(let i=0; i<10; i++) {
    console.log('i: ', i);
}


//while은 주로 이렇게 사용한다.
//조건식에 true로 무한반복을 만들고, if + break로 멈춘다.
let k = 0;
while(true) {
    console.log('반복');
    if(k === 5) { break; }
    k++;
}
console.log('-- 끝 --');

/*

while(조건1) {
    while문 들어가기전에 조건1이 true일 때만 반복을 시작
    즉, 조건1 최초 false였다면 반복을 시작하지도 않는다.
}


do { 
    최초 한번은 무조건 돌립니다. 그리고 조건2를 물어본다. 
} while(조건2);


*/



