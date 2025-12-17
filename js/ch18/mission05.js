const person = {
    married: true
};

//person이 가리키고 있는 객체의 married 속성이 있는지는 알지만
//값은 모른다는 전제, 현재 person married상태를 반대로 만들어 주세요.
//----------------

person.married = !person.married;


//----------------
console.log(person); //married: false