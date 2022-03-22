//assignment(문자열 빈칸 없애기)
const handleEdit = (nickname, interests) => {

    let firstInterests = interests.split(",")
   
    for(let i=0; i < firstInterests.length; i++) {

    firstInterests[i] = firstInterests[i].trim()

      
    }
    
  
  
  const handleObj = {
      // 아래에 코드를 작성해주세요.
      nickname  : nickname,
      interests : firstInterests,
      bio       : `제 닉네임은 ${nickname}입니다. 취미는 ${firstInterests}입니다.`
  }
 
  return handleObj;
}



handleEdit("뚜비", "방탈출, 테니스, 멍 때리기")