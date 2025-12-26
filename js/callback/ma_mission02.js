/* ma_mission02.js  */
const myArr = {
    '0': 3,
    '1': 88,
    '2': 76,
    '3': 9,
    '4': 34,
    '5': 65,
    '6': 77,
    'length': 7,
    'forEach': function(aaa) {  
        for(let i=0; i<this.length; i++) {
            aaa(this[i], i);
        }
    },
    'filter': function() {
        const temp = [];
        //작업!!!
        
        return temp;
    }
};

const arr2 = myArr.filter( (item, i) => item <= 70 );
console.log(arr2); // [ 3, 9, 34, 65 ]



