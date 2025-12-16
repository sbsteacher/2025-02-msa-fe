/*
    Math.random() 메소드를 호출하면
    0.0000 ~ 0.9999 사이의 랜덤값을 리턴한다.
*/
let rVal = Math.random();
let rVal2 = console.log('rVal:', rVal);
console.log('rVal2:', rVal2);

//최소값~최대값
//0.0 ~ 9.9999
let rVal3 = Math.random() * 10;
console.log('rVal3:', rVal3);
console.log('parseInt(rVal3):', parseInt(rVal3));

let rVal4 = parseInt(Math.random() * 10);
