/* fn_mission07.js */
//함수 정의

const sumArr = (arr) => {
    if(arr.length === 0) { return 0; }

    let sum = arr[0];
    for(let i = 1; i<arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

const arr = [ 10, 8, 4, 88, 65, 3, 99 ];
const sum = sumArr(arr); //배열의 모든 값을 더한 값을 리턴하는 함수 277
console.log('sum:', sum);

