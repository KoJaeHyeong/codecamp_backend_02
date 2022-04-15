import { Module } from '@nestjs/common';
import { RentUser } from '../rentUser/entities/rentUser.entity';
import { RentReservation } from './entities/rentReservation.entity';
import { RentReservationResolver } from './rentReservation.resolver';
import { RentReservationService } from './rentReservation.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rent } from '../rent/entities/rent.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      RentReservation, //
      RentUser,
      Rent,
    ]),
  ],
  providers: [
    RentReservationResolver, //
    RentReservationService,
  ],
})
export class RentReservationModule {}
