/* primitive_ref.js

프라머티브타입(일반타입) vs 레퍼런스타입(참조타입)
*/

const changeNum = (num) => {
    num = 20;
}

let num = 10;
changeNum(num);
console.log('num:', num);

console.log('-----------------------------------');
const changeBoxNum = (box) => {
    box = {
        num: 30
    }
    box.num = 20;
    return box;
}

let box = {
    num: 10
};
console.log('box.num:', box.num);
const box2 = changeBoxNum(box);
console.log('box.num:', box.num); //10
console.log('box2.num:', box2.num); //20

