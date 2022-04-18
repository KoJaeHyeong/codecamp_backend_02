import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { query } from 'express';
import { throwIfEmpty } from 'rxjs';
import { Connection, Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
import {
  PointTransaction,
  POINT_TRANSACTION_STATUS_ENUM,
} from './entities/pointTransaction.entity';

@Injectable()
export class PointTransactionService {
  constructor(
    @InjectRepository(PointTransaction)
    private readonly pointTransactionRepository: Repository<PointTransaction>,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,

    private readonly connection: Connection, // 트랜잭션을 위한 연결
  ) {}

  async create({ impUid, amount, currentUser }) {
    const queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();

    // transaction 시작!!
    await queryRunner.startTransaction();

    try {
      // 1. pointTransaction 테이블에 거래기록 1줄 생성.
      const pointTransaction = await this.pointTransactionRepository.create({
        impUid: impUid,
        amount: amount,
        user: currentUser,
        status: POINT_TRANSACTION_STATUS_ENUM.PAYMENT,
      });

      await queryRunner.manager.save(pointTransaction); // queryRunner를 통해서 저장! // await this.pointTransactionRepository.save(pointTransaction);

      // throw new Error('에러 개발생!!!'); 에러가 발생하면, 다 실패한걸로 나옴!

      // 2. 유저의 돈 찾아오기
      const user = await this.userRepository.findOne({ id: currentUser.id });

      // 3. 유저의 돈 업데이트
      // await this.userRepository.update(
      //   // 그냥 줄이 바뀐 정도
      //   { id: user.id }, // 조건
      //   { point: user.point + amount }, // 수정할 내용
      // );
      const updatedUser = this.userRepository.create({
        ...user, // user부분을 스프레드 시키고, 그 중에서 point부분을 불러 왔다.
        point: user.point + amount,
      });
      await queryRunner.manager.save(updatedUser); // this.userRepository.save(updatedUser);

      // commit 성공 확정 !!! , try가 다 성공하면!
      await queryRunner.commitTransaction();

      // 4. 최종결과 프론트엔드에 돌려주기
      return pointTransaction; // 프론트엔드한테 마지막에 최종 값 돌려줌
    } catch (error) {
      // rollback 되될리기!!
      await queryRunner.rollbackTransaction();
    } finally {
      // 성공하든 실패하든 마지막에 연결을 끊어줘야한다.
      // 연결 해제!!
      // await queryRunner.release();
    }
  }
}
