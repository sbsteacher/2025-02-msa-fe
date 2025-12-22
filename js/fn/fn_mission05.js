/* fn_mission05.js */
//함수 정의
function printStarLine(num) {
    let str = '';
    for(let i=0; i<num; i++) {
        str += '*';
    }
    console.log(str);
}

function printStarSquare(num) {
    for(let k=0; k<num; k++) {
        printStarLine(num);
    }
}

function printStarTriangle(num) {
    for(let k=1; k<=num; k++) {
        printStarLine(k);
    }
}

//함수 호출
printStarLine(5);
//*****

printStarLine(3);
//***


console.log('---------------------- square');

printStarSquare(5);
//*****
//*****
//*****
//*****
//*****

printStarSquare(3);
//***
//***
//***

console.log('---------------------- triangle');
printStarTriangle(5);
//*
//**
//***
//****
//*****

printStarTriangle(3);
//*
//**
//***


