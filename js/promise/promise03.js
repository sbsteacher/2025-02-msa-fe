/* promise03.js 

async, await 사용법, 무조건 함수가 필요!

then, catch 사용하지 않겠다.
*/
const increaseAndPrintPromise = (n) => {
    return new Promise( resolve => {
        setTimeout( () => {
            const increased = n + 1;
            console.log('increased:', increased);
            resolve(increased);
        }, 1000 )
    });
}
/*
await를 사용하려면 async함수에서만 가능하다.
async의 역할은 await를 사용할 수 있는 함수를 생성
await 우측은 무조건!!! Promise 객체 주소값이 있어야 한다.
await는 우측에 결과가 넘어올 때까지 기다린다. resolve호출할 때 넘겨줬던 아규먼트값을 받을 때 사용.
reject 아규먼트 값은 try-catch 문법으로 받아야한다.
*/
const callFunction = async (n) => {
    let result = await increaseAndPrintPromise(n);
    console.log('result:', result);
    result = await increaseAndPrintPromise(result);
    result = await increaseAndPrintPromise(result);
    result = await increaseAndPrintPromise(result);
    result = await increaseAndPrintPromise(result);
    result = await increaseAndPrintPromise(result);
    result = await increaseAndPrintPromise(result);
    result = await increaseAndPrintPromise(result);
}
callFunction(10);
