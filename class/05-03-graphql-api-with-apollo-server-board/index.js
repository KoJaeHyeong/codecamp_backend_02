import { ApolloServer, gql } from 'apollo-server';


// ---------------------------------------------------- 스웨거 부분
// 객체중심이다 (GraphQl)
const typeDefs = gql`
input CreateBoardInput {
  writer: String
  title: String
  contents: String
}

  type BoardReturn {
    number: Int
    writer: String
    title: String
    contents: String
  }

# 주서처리는 "#"을 쓴다.

  type Query {
    # fetchBoards: [BoardReturn] => 객체 1개를 의미
    fetchBoards: [BoardReturn] # => 배열 안에 객체 1개 이상을 의미 
  }

  type Mutation {
    createBoard(writer: String, title: String, contents: String): String
    createBoard2(CreateBoardInput: CreateBoardInput): String # CreateBoardInput 이것은 하나 더 만들어줘야함
    
  }
`;
// -------------------------------------------------------------- Query 부분
const resolvers = {  // 리졸버 = 바꿀수도 있음 우리 맘대로, 하나의 key와 value로 되어 있다. ","쓰는 거 잊지 말자!!
  Query: {
    fetchBoards: () => {
      // 1. 데이터를 조회하는 로직 => DB에 접속해서 데이터 꺼내오기
      const result = [
          { number: 1, writer: "철수", title: "뭘봐", contents: "어쩌라고"},
          { number: 1, writer: "영희", title: "난 영희", contents: "내용이에요@@@"},
          { number: 1, writer: "훈이", title: "넌 누구", contents: "내용이에요@@@"}
      ]
      
      // 2. 꺼내온 결과 응답 주기
      return result
    }
  },

  // ----------------------------------------------------------- Mutation 부분
  Mutation: {
    createBoard: (_, args) => {  // 안쓰는 애들은 _로 해놓은다.
      
      // 1. 데이터를 등록하는 로직 => DB에 접속해서 데이터 저장하기
      // 콘솔로 찍어서 확인 해보기
      console.log(args)

      //2. 저장결과 알려주기!!
      return "등록에 성공하였습니다!!!"
    }, // 이거 하나 자체가 키 {value}로 되어있다 ==> 하나의 객체

    createBoard2: (_, args) => {  
      
      // 1. 데이터를 등록하는 로직 => DB에 접속해서 데이터 저장하기
      // 콘솔로 찍어서 확인 해보기
      console.log(args)

      //2. 저장결과 알려주기!!
      return "등록에 성공하였습니다!!!"
    }
  }
};

// ----------------------------------------------------------------

const server = new ApolloServer({
  typeDefs,  
  resolvers,
});

server.listen(3001).then(({ url }) => {
  console.log(`🚀 Server ready at ${url} on port ${3001}`);
});