/* for_mission06.js 
구구단 2단~9단까지 출력해 주시오.

2 x 1 = 2
2 x 2 = 4
2 x 3 = 6
...
2 x 9 = 18
----
3 x 1 = 3
3 x 2 = 6
...
3 x 9 = 27
----
4 x 1 = 4
...
9 x 9 = 81

*/
let isFirst = true;
for(let i=2; i<9; i++) {
    if(isFirst) {
        isFirst = false
    } else {
        console.log('----');
    }

    for(let k=1; k<10; k++) {
        console.log(`${i} x ${k} = ${i * k}`);
    }    
}