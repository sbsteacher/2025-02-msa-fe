/* promise02.js 

함수와 함께 콜백지옥에 빠지는 코드

함수와 함께 콜백지옥을 해결하는 promise 코드
*/
const increaseAndPrint = (n, cb) => {
    setTimeout( () => {
        const increased = n + 1;
        console.log('increased:', increased);
        if(cb) {
            cb(increased);
        }
    }, 1000 );
}

// increaseAndPrint(0, n1 => {
//     increaseAndPrint(n1, n2 => {
//         increaseAndPrint(n2);
//     });
// });

console.log('-----------------------');

const increaseAndPrintPromise = (n) => {
    return new Promise( resolve => {
        setTimeout( () => {
            const increased = n + 1;
            console.log('increased:', increased);
            resolve(increased);
        }, 1000 )
    });
}

increaseAndPrintPromise(10)
.then(item => increaseAndPrintPromise(item))
.then(item => increaseAndPrintPromise(item))
.then(item => console.log('끝') );
