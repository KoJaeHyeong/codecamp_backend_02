import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RentResolver } from './rent.resolver';
import { RentService } from './rent.service';
import { Rent } from './entities/rent.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Rent])],
  providers: [
    RentResolver, //
    RentService,
  ],
})
export class RentModule {}
