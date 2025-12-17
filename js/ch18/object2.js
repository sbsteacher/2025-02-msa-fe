/* object2.js
*/
const person1 = {
    name: '김철수',
    age: 25,
    married: false
};
console.log(typeof person1);
console.log(person1);

//person1이 가리키고 있는 객체의 married속성값을 true로 수정하시오.
//person1.married = true;

console.log(!person1.married);
console.log(person1.married);

person1['age'] = 30;
const key = 'name';
person1[key] = '권수영';
//person1['name'] = '권수영'; // 이렇게 작성한 것과 같다.


//객체 생성 이후에 속성추가가 가능하다. (동적 할당)
person1.address = '대구';
person1['height'] = 174.3;
console.log(person1);

