const arr = [];

/* 미션,
arr 배열에 객체 200개를 담는다. 
객체는 
{
    id: 1,
    name: '홍길동1'
},
{
    id: 2,
    name: '홍길동2'
}
즉, id는 순차적으로 증가하면되고 이름은 홍길동{id} 저장이
되면 된다. 
*/

for(let i=1; i<=100; i++) {
    const obj = {
        id: i,
        name: `홍길동${i}`
    };
    arr.push(obj);
    //arr.push({id: i, name: `홍길동${i}`})
}

console.log(arr);