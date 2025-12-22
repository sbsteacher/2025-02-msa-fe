/* fn_mission04.js

    parseInt(Math.random() * ?1) + ?2;

    (3, 9)   >>   ?1(6)   ?2(3)
    (10, 15)   >>   ?1(5)   ?2(10)
*/
function random(min, max) {
    return parseInt(Math.random() * (max - min)) + min;
}

const randomValue = random(3, 9); // 3~8 랜덤값을 리턴하는 함수를 만들어 주세요.
console.log('randomValue: ', randomValue);

const randomValue2 = random(10, 15); // 10~14 랜덤값을 리턴하는 함수를 만들어 주세요.
console.log('randomValue2: ', randomValue2);
