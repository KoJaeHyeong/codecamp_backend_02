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
@Entity() // 테이블로 만들어줘
export class Rent {
  @PrimaryGeneratedColumn('uuid') // Generated 우리가 따로 안만들어도 알아서 자동으로 만들어 진다.
  id: string;

  @Column()
  name: string;

  @Column()
  host: string;

  @Column()
  star_score: number;

  @Column()
  pre_score_clean: number;

  @Column()
  pre_score_comu: number;

  @Column()
  pre_score_checkin: number;

  @Column()
  pre_score_exact: number;

  @Column()
  pre_score_location: number;

  @Column()
  pre_score_satisfy: number;

  @Column()
  rent_pre_number: number;

  @Column()
  rent_contents: string;

  @ManyToOne(() => RentHost) // 다 : 1 // ManytoOJ
  rentHost: RentHost;

  @JoinTable()
  @ManyToMany(() => RentFacility, (rentFacility) => rentFacility.rents)
  rentFacility: RentFacility[];

  @JoinTable()
  @ManyToMany(() => RentTrans, (rentTrans) => rentTrans.rents)
  rentTrans: RentTrans[];

  @JoinTable()
  @ManyToMany(() => RentLocation, (rentLocation) => rentLocation.rents)
  rentLocation: RentLocation[];
}
