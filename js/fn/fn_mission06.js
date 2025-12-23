/* fn_mission06.js */
//함수 정의
const findMax = (arr) => {
    let max = arr[0];
    for(let i=1; i<arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

const arr = [ 10, 8, 4, 88, 65, 3, 99 ];
const max = findMax(arr); // 배열의 가장 큰 값이 리턴
console.log('max:', max);

