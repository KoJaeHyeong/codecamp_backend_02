import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
  ApolloDriverConfig,
  ApolloDriver,
} from '@nestjs/apollo';
import { AppResolver } from './app.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/common/graphql/schema.gql', // 스키마 파일 자동으로 생성
    }),
  ],
  // controllers: [AppResolver],
  providers: [AppResolver, AppService],
})
export class AppModule {}
