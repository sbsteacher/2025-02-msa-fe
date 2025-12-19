/* for_mission10.js */
const star = parseInt(Math.random() * 5.0) + 3; //3~7사이 랜덤값

console.log('star:', star);

for(let i=star; i>0; i--) {
    let str = '';
    for(let k=1; k<=star; k++) {
        str += k<i ? '_' : '*';        
    }
    console.log(str);
}

console.log('----------');

for(let i=1; i<=star; i++) {
    let str = '';
    for(let k=star; k>0; k--) {
        if(k>i) {
            str += '_';
        } else {
            str += '*';
        }
    }
    console.log(str);
}
console.log('----------');
let aster_risk = '';
for(let i=1; i<=star; i++) {
    aster_risk += '*';
    
    let space = '';
    for(let k=star; k>i; k--) {
        space += '_';
    }
    console.log(space+aster_risk);
}

//예) 5
//____*
//___**
//__***
//_****
//*****

//예) 3
//__*
//_**
//***