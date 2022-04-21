import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RentResolver } from './rent.resolver';
import { RentService } from './rent.service';
import { Rent } from './entities/rent.entity';
import { RentHost } from '../rentHost/entities/rentHost.entity';
import { RentToknow } from '../rentToknow/entities/rentToknow.entity';
import { RentExplain } from '../rentExplain/entities/rentExplain.entity';
import { RentFacility } from '../rentFacility/entities/rentFacility.entity';
import { RentLocation } from '../rentLoca/entities/rentLocation.entity';
import { RentTrans } from '../rentTrans/entities/rentTrans.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Rent,
      RentHost,
      RentToknow,
      RentExplain,
      RentFacility,
      RentLocation,
      RentTrans,
    ]),
  ],
  providers: [
    RentResolver, //
    RentService,
  ],
})
export class RentModule {}
