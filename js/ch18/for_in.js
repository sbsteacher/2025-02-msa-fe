/* for_in.js 
객체가 가지고 있는 key(속성명)를 순차적으로 준다.
*/
const person1 = {
    name: '김철수',
    age: 25,
    married: false
};

for(const key in person1) {
    console.log('key: ', key);
}

//14번 아래에 person1객체가 가지고 있는 value를 출력해 주세요.
// 김철수
// 25
// false
console.log(person1.name);
console.log(person1.age);
console.log(person1.married);
console.log('-----')
for(const key in person1) {
    console.log(person1[key]);
}