console.log("안녕하세요~~")

function getToken(mycount) { // 재사용성이 떨어진다....
   
    if(mycount === undefined) {
        console.log("에러 발생!!! 갯수를 제대로 입력해 주세요!!!")
        return;
    } else if(mycount <= 0) {
        console.log("에러 발생!!! 갯수가 너무 적습니다!!!")
        return;
    } else if(mycount > 10) {
        console.log("에러 발생!!! 갯수가 너무 많습니다!!!")
        return;
    }

    const result = String(Math.floor(Math.random() * 10**mycount)).padStart(mycount,"0") // 10**mycount = 10^mycount
    console.log(result)
}
            // 숫자 4개를 넣으면 4개 토큰이 나오게, 10개를 넣으면 10개 토큰이 나오게 하기
getToken(4) // undefined : 아예 없는거
            // null : 원래 값이 있었는데, 값을 비우고 싶을때!!

