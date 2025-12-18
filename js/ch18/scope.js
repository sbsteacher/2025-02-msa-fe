/* scope.js, 변수, 상수가 살아있는 범위

선언할 때 자신을 감싸고 있는 {} 안에서만 살아있음. 
(단, 중괄호가 없는 경우, 파일 자체가 중괄호이다.)

*/


let n1 = 10;
{   
    let n1 = 20;
    console.log('2-n1:', n1);
    //let n2 = 30;
}
console.log('n1:', n1);
//console.log('n2:', n2);

let i=0;
for( ; i<10; i++) {

}
console.log('i:', i);