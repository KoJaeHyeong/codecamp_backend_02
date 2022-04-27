import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'AUTH_SERVICE', //연결할 이름
        transport: Transport.TCP, // 연결할 방식(기본 연결 방식)
        options: {
          host: 'auth-service',
          port: 3001,
        },
      },
      {
        name: 'RESOURCE_SERVICE',
        transport: Transport.TCP,
        options: {
          host: 'resource-service',
          port: 3002,
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
