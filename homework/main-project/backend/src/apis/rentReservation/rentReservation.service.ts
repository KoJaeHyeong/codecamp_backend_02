import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  POINT_TRANSACTION_STATUS_ENUM,
  RentReservation,
} from './entities/rentReservation.entity';
import { RentUser } from '../rentUser/entities/rentUser.entity';

@Injectable()
export class RentReservationService {
  constructor(
    @InjectRepository(RentReservation)
    private readonly rentReservationRepository: Repository<RentReservation>,

    @InjectRepository(RentUser)
    private readonly rentUserRepository: Repository<RentUser>,
  ) {}

  async findAll() {
    return await this.rentReservationRepository.find({
      relations: ['rentUser', 'rent'],
    });
  }

  async findOne({ impUid }) {
    return await this.rentReservationRepository.findOne({
      where: { impUid },
      relations: ['rentUser', 'rent'],
    });
  }

  async create({ impUid, price, currentUser, rentId }) {
    // 1. RentReservation 테이블에 거래기록 1줄 생성
    console.log('BBBBB');
    const ids1 = await this.rentUserRepository.findOne({
      where: { email: currentUser.email }, // currnetUser에 로그인한 유저의 모든 정보가 담긴다.
    });
    console.log('CCCCC');
    const rentReservation = await this.rentReservationRepository.save({
      impUid: impUid,
      price: price,
      user: currentUser,
      rent: { id: rentId },
      rentUser: { id: ids1.id },
      status: POINT_TRANSACTION_STATUS_ENUM.PAYMENT, // 지불한 상태를 저장!
    });
    console.log('DDDDD');
    // 2. 유저의 돈 찾아오기
    // await this.rentUserRepository.findOne({ id: currentUser.id });

    // 3. 유저의 돈 업데이트
    // await this.rentUserRepository.update(
    //   { id: user.id },
    //   { price: user.price }, // 할인해주는 로직 만들기!!
    // );
    // 4. 최종결과 프론트엔드에 돌려주기
    return rentReservation;
  }
}
