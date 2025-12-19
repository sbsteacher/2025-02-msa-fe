/* for_array_mission01.js
반복문을 이용하여 각 방에 1부터 순차적으로 값을 대입해 주세요.

0번방 : 1
1번방 : 2
...
9번방 : 10
*/

const arr = new Array(10);
//--- 작업 공간 -- start
for(let i=0; i<100; i++) {
    arr[i] = i + 1;
    //arr.push(i + 1);
}

//--- 작업 공간 -- end
console.log(arr); // [ 1, 2, 3, 4, 5, 
//                     6, 7, 8, 9, 10 ]
