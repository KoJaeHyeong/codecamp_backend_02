// import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
// import { GraphQLModule } from '@nestjs/graphql';
// import { BoardModule } from './apis/boards/boards.module';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';

@Module({
  // graphQl에게 얘는 모듈로 쓸거야 라고 말한다.// @는 데코레이터(함수)
  imports: [
    TypeOrmModule.forRoot({
      //mysql과 연결해주 위해서 TypeOrmModule의 옵션을 설정!
      type: 'mysql',
      host: 'my-database',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'myproject00',
      entities: [__dirname + '/apis/**/*.entity.*'], // __dirname + '/apis/**/*.entity.*' entity라는 이름이 들어간 파일 모두를 연결해줘!!
      synchronize: true,
      logging: true,
    }),
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
