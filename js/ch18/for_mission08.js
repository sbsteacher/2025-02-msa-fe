/* for_mission08.js */
const star = parseInt(Math.random() * 5.0) + 3; //3~7사이 랜덤값
console.log('star:', star);
for(let i=0; i<star; i++) {
    let str = '';
    for(let k=0; k<star; k++) {
        str += '*'
    }
    console.log(str);
}

console.log('-------------')
let str = '';
for(let i=0; i<star; i++) {
    str += '*';
}
for(let i=0; i<star; i++) {
    console.log(str);
}
console.log('-------------')
let str2 = '';
for(let i=1; i<=star*star; i++) {
    str2 += '*';
    if(i % star === 0) {
        str2 += '\n';
    }
}
console.log(str2);
//예) 5
//*****
//*****
//*****
//*****
//*****

//예) 3
//***
//***
//***