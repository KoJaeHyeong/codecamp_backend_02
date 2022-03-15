// 주민번호는 앞 6자리, 뒤 7자리로 구성
export function authLength(num) {
    const authNumber1 = (num.split("-")[0]).length
    const authNumber2 = (num.split("-")[1]).length
    if(authNumber1 !== 6 && authNumber2.length !== 7) {
        console.log("에러발생!!! 갯수를 제대로 입력해주세요!!!")
        return false;
    } else {
        return true;
    }
}

// 주민번호 가운데 "-" 구성
export function authSign(num) {
    if(num.includes("-") === false) {
        console.log("에러발생!!! 형식이 올바르지 않습니다!!!")
        return false;
    } else {
        return true;
    }
}

// 뒤 7자리 중, 끝 6자리는 *로 변경
export function authConvert(num) {
    let authNumber1 = num.split("-")[0]
    let authNumber2 = num.split("-")[1]
    authNumber2 = authNumber2.split("")
    let convert = authNumber2.fill("*", 1)
    convert = convert.join("")
    const result = authNumber1 + "-" + convert
    return result;
}


export function finish(afterNum) {
    console.log(afterNum)
}

//퍼사드패턴 함수

