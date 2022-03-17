function bigNum(str) {
    let biggest = 0;
    
    for(i=0; i < str.length; i++) {
        if( Number(str[i]) > biggest ) {
            biggest = Number(str[i])
        }
    }
    console.log(biggest)
}

bigNum("12345232323321899756")

// 실무에서 큰 값을 뽑을때 이 방법을 많이 사용한다!!!