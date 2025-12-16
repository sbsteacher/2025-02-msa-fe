/*
식별자(변수명, 상수명, 함수명 등등, ~~명) 명명 규칙
- 숫자로 시작하면 안된다.
- 특수기호는 _, $만 사용가능
- 예약어 사용 금지 (특정 단어는 역할이 있음)
- 스페이스 사용 불가
- 한글 가능하나 영어,숫자,특수기호만 사용

명명 기법
- 카멜 케이스 (Camel Case)
- 파스칼 케이스 (Pascal Case)
- 스네이크 케이스 (Snake Case)
- 케밥 케이스 (Kebap Case)

단어 여러개를 합쳐서 식별자를 만들 때 사용하는 기법
만약 my, name, is, hong 단어를 합쳐서 식별자를 만들 때
Camel Case: myNameIsHong
Pascal Case: MyNameIsHong
Snake Case: my_name_is_hong

Kebap Case: my-name-is-hong
*/

//let 1bbb;

let aaa$b;
let _abc$b;

//const let; //예약어 사용

//let ab cd; //스페이스 사용 불가

let 한글; //한글 식별자는 사용하지 말자