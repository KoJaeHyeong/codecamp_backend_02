//assignment

 // 쉽게 말해서, 2차원 탐색은 

// for문을 2번 돌려라는 말임;;


function takeRank(arr){
    // 아래에 코드를 작성해주세요.  
    let answer=Array.from();

    return answer;
}

// 아래의 코드는 절대로 수정하거나 삭제하지 마세요.
module.exports = takeRank;



// 2차원 배열로 푼 문제
function takeRank(arr){
    
    let answer=Array.from( Array(2), (v,i) => i === 0 ? arr: Array(arr.length).fill(1));

    console.log(answer)
  
    for(i=0; i < arr.length; i++) {
        for(j=0; j < arr.length; j++) {
        if(answer[0][i] < answer[0][j] ) {
            answer[1][i]++;
        }
        }
    }
        return answer[1];
}

takeRank([87, 89, 92, 100, 76])