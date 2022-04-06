import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { RentHost } from 'src/apis/rentHost/entities/rentHost.entity';
import { RentTrans } from 'src/apis/rentTrans/entities/rentTrans.entity';
import { ManyToOne } from 'typeorm';
import { RentFacility } from 'src/apis/rentFacility/entities/rentFacility.entity';
import { RentLocation } from 'src/apis/rentLoca/entities/rentLocation.entity';
import { Field, ObjectType, Int, Float } from '@nestjs/graphql';

@Entity() // 테이블로 만들어줘
@ObjectType()
export class Rent {
  @PrimaryGeneratedColumn('uuid') // Generated 우리가 따로 안만들어도 알아서 자동으로 만들어 진다.
  @Field(() => String)
  id: string;

  @Column()
  @Field(() => String)
  name: string;

  @Column()
  @Field(() => String)
  host: string;

  @Column()
  @Field(() => Float)
  star_score: number;

  @Column()
  @Field(() => Float)
  pre_score_clean: number;

  @Column()
  @Field(() => Float)
  pre_score_comu: number;

  @Column()
  @Field(() => Float)
  pre_score_checkin: number;

  @Column()
  @Field(() => Float)
  pre_score_exact: number;

  @Column()
  @Field(() => Float)
  pre_score_location: number;

  @Column()
  @Field(() => Float)
  pre_score_satisfy: number;

  @Column()
  @Field(() => Float)
  rent_pre_number: number;

  @Column()
  @Field(() => String)
  rent_contents: string;

  @ManyToOne(() => RentHost) // 다 : 1 // ManytoOne
  @Field(() => RentHost)
  rentHost: RentHost;

  @JoinTable()
  @ManyToMany(() => RentFacility, (rentFacility) => rentFacility.rents)
  @Field(() => RentFacility)
  rentFacility: RentFacility[];

  @JoinTable()
  @ManyToMany(() => RentTrans, (rentTrans) => rentTrans.rents)
  @Field(() => RentTrans)
  rentTrans: RentTrans[];

  @JoinTable()
  @ManyToMany(() => RentLocation, (rentLocation) => rentLocation.rents)
  @Field(() => RentLocation)
  rentLocation: RentLocation[];
}
