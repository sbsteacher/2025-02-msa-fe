/* object.js
자바스크립트에서 객체를 만드는 방법

객체는 (속성), (메소드(Method)) 이루어질 수 있다.
키: 값
key: value(속성값 or 함수(Function))

person1에 저장되는 값은 객체의 주소값 하나!!!

객체의 주소값을 알면 속성값 읽기/쓰기, 메소드 호출할 수 있다.
주소값.  주소값쩜!!!  ->
*/
const person1 = {
    name: '김철수3',
    age: 25,
    married: false
};

const person2 = person1; //shallow copy (얕은 복사, 주소값 복사)
console.log('person1.name:', person1.name);
console.log('person2.name:', person2.name);
person1.name = '홍길동';
person2.age = 30;
console.log('person1.name:', person1.name);
console.log('person2.name:', person2.name);
console.log('person1.age:', person1.age);
console.log('person2.age:', person2.age);



// 객체 자체를 복사하는 것은 deep copy (깊은 복사, 객체 복사)
const person3 = {
    name: '김철수',
    age: 25,
    married: false
}
//동등성, 동일성
