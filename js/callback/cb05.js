/* cb05.js 배열의 reduce함수, 배열을 하나의 값으로 변경하고 싶을 때 사용

주로, 전체 sum값을 구할 때
*/

const arr = [ 3, 88, 76, 9, 34, 65 ];

const result = arr.reduce( (prev, current) => {
    //prev는 이전에 return한 값
    //current는 현재값

    //최초만 0번방이 prev파라미터로 들어오고, 1번방이 current파라미터로 들어온다.
    //두번째 돌 때는 prev파라미터로 91(이전에 리턴한 값)이 들어오고, 2번방이 current파라미터로 들어온다.
    //prev(167), current(9), return(176)
    //prev(176), current(34), return(210)
    //prev(210), current(65), return(275)
    return prev + current;
} );

console.log(result);


const result2 = arr.reduce( (prev, current) => { 
    return prev + current;
}, 10); //두번째 아규먼트는 최초 prev 값으로 쓰인다.
console.log(result2);