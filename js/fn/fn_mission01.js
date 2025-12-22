/*  fn_mission01.js */
//함수 정의
function abs(num) {    
    console.log(num < 0 ? -num : num);    
}


function abs2(num) {    
    let val = num; //파라미터 값을 변경하고 싶다면 복사해서 사용한다. 원본은 보존한다.
    if(val < 0) { val = -val;}
    console.log(val);    
}
//함수 호출
abs2(10); //콘솔에 10 출력
abs2(-20); //콘솔에 20 출력


