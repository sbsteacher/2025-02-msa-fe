/* for_mission09.js */
const star = parseInt(Math.random() * 5.0) + 3; //3~7사이 랜덤값

console.log('star:', star);
let str = '';
for(let i=0; i<star; i++) {
    str += '*';
    console.log(str);
}
//예) 5
//*
//**
//***
//****
//*****

//예) 3
//*
//**
//***