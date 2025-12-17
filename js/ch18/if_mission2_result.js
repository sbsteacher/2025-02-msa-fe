/* if_mission2.js

score값이 
98이상이면 "A+" 출력
93~97점은 "A0" 출력
90~92점은 "A-" 출력

88이상이면 "B+" 출력
83~87점은 "B0" 출력
80~82점은 "B-" 출력

78이상이면 "C+" 출력
73~77점은 "C0" 출력
70~72점은 "C-" 출력

68이상이면 "D+" 출력
63~67점은 "D0" 출력
60~62점은 "D-" 출력

60미만이면 "F"출력
*/

const score = parseInt(Math.random() * 81.0) + 20; //20~100사이 랜덤값
console.log('score:', score);
let result = 'F';

if( score >= 90 ) {
    result = 'A';
} else if( score >= 80 ) {
    result = 'B';
} else if( score >= 70 ) {
    result = 'C';
} else if( score >= 60 ) {
    result = 'D';
}

if(score >= 60) {
    if (score == 100 || score % 10 >= 8) { result += '+'; }
    else if (score % 10 >= 3) { result += '0'; }
    else { result = result + '-';  }
}

console.log(result);