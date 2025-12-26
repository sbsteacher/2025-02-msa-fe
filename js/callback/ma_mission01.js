/* ma_mission01.js  */
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
    }
};

myArr.forEach((item, idx) => {
    console.log(`arr2[${idx}]: ${item}`);
});


