import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RentUserResolver } from './rentUser.resolver';
import { RentUserService } from './rentUser.service';
import { RentUser } from './entities/rentUser.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RentUser])],
  providers: [
    RentUserResolver, //
    RentUserService,
  ],
})
export class RentUserModule {}
