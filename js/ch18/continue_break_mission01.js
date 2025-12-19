/* continue_break_mission01.js
*/

//1~10 오름차순으로 세로로 숫자를 출력해 주세요.
//continue 활용해서 짝수만 출력되게 해주세요.
for(let i=1; i<11; i++) { //Don't touch!!!!!!
    if(i % 2 === 1) { continue; }
    console.log(i);
}