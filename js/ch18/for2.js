/* for2.js
중첩 for문 (for in for)

시계(시간/분/초 관계)
*/

for(let h=0; h<6; h++) {
    for(let m=0; m<30; m++) {
        for(let s=0; s<30; s++) {
            console.log(`${h}:${m}:${s}`);
        }
    }
}