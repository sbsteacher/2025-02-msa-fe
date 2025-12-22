/* while_mission.js 

1, 2, 3, 4 식으로 계속 합계를 구한다. 
합계값이 100이 넘어간 순간의 마지막 더한 값을 출력해 주세요.

*/

let sum = 0;
let idx = 1;
while(true) {
    sum += idx;
    if(sum > 100) { break; }
    idx++;
}

console.log('idx:', idx);


