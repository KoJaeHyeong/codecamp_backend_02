import { Module } from '@nestjs/common';
import { RentUser } from '../rentUser/entities/rentUser.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { RentUserService } from '../rentUser/rentUser.service';

@Module({
  imports: [
    JwtModule.register({}), //
    TypeOrmModule.forFeature([RentUser]),
  ],
  providers: [
    AuthResolver, //
    AuthService,
    RentUserService,
  ],
})
export class AuthModule {}
