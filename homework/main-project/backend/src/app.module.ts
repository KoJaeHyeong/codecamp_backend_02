import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './apis/auth/auth.module';
import { RentModule } from './apis/rent/rent.module';
import { RentCustomerModule } from './apis/rentCustomer/rentCustomer.module';
import { RentHostModule } from './apis/rentHost/rentHost.module';
import { RentUserModule } from './apis/rentUser/rentUser.module';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';

@Module({
  // graphQl에게 얘는 모듈로 쓸거야 라고 말한다.// @는 데코레이터(함수)
  imports: [
    AuthModule,
    RentModule,
    RentHostModule,
    RentUserModule,
    RentCustomerModule,
    // 마지막은 무조건 여기서 임폴트 해줘야 한다.
    GraphQLModule.forRoot<ApolloDriverConfig>({
      // forroot메서드는 옵션 객체를 인수로 받을 수 있다.
      // Nestjs 홈페이지 code first 부분 보고 넣어준것
      driver: ApolloDriver,
      autoSchemaFile: 'src/commons/graphql/schema.gql',
      context: ({ req, res }) => ({ req, res }),
    }),
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
