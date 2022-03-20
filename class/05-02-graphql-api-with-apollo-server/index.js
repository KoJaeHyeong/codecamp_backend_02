import { ApolloServer, gql } from 'apollo-server';

// The GraphQL schema  // GraphQl에서의 swagger / docs 부분
const typeDefs = gql`
  type Query {
    "A simple type for getting started!"
    hello: Int
  }
`;

// A map of functions which return data for the schema.
const resolvers = {  // 리졸버 = 바꿀수도 있음 우리 맘대로
  Query: {
    hello: () => 100, // return과 중괄호 사이에 아무것도 없어서 이런식으로 표현
  },
};

const server = new ApolloServer({
  typeDefs,  // shorthand property(key와 value가 같으면 생략 가능!)
  resolvers,
});

server.listen(3001).then(({ url }) => {
  console.log(`🚀 Server ready at ${url} on port ${3001}`);
});