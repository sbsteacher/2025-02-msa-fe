/* for_mission05.js */

const dan = parseInt(Math.random() * 8.0) + 2; //2~9 랜덤값 
console.log('dan: ', dan); //4

for(let i=1; i<=9; i++) {
    console.log(`${dan} x ${i} = ${dan * i}`);
}



//4 x 1 = 4
//4 x 2 = 8
//4 x 3 = 12
//...
//4 x 9 = 36


//5 x 1 = 5
//5 x 2 = 10
//5 x 3 = 15
//...
//5 x 9 = 45
