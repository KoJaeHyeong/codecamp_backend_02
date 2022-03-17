// for (let i = 0; i < 5; i++) {
//     if(i == 2) {
//         continue; // 해당 구간의 반복문을 실행하지 않음.. // break는 반복문을 멈춤
//     }
//     console.log(i)
// }

// for - in  : 문자열, 객체, 배열 반복할때! 사용 가능
// ex) 

str = "abc"

for(let key in str) {
    console.log(str[key])
}

obj = {
    name: "철수",
    age: 12
}

for(let key in obj) {
    console.log(key, obj[key]) // obj[key]는 obj안에 있는 요소 중 key속성 값을 의마함.
}

// for-of => 각각의 요소들을 가져올 수 있다.


// forEach => 배열에만 사용 가능!

arr = ["a", "b", "c"];

arr.forEach( function(el) {
    console.log(el)
})

arr.forEach(el => {
    console.log(el)
})

// while(조건식) => for와 동일

let count = 0;
while(count !== 5) {  // 결과가 나올때 까지 무한하게 반복문을 실행 할 때
    console.log(count)
    count ++;
}
