import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findOne({ email }) {
    return await this.userRepository.findOne({ email });
  } // authResolver를 사용하기 위해서 찾는 api를 만듬.

  async create({ email, hashedPassword: password, name, age }) {
    const user = await this.userRepository.findOne({ email });
    if (user)
      throw new ConflictException('이미 등록된 이메일이자나 정신안차려?!'); //정해진건 없다!! 상황에 따라 백엔드인 내가 결정!

    return await this.userRepository.save({
      email,
      password,
      name,
      age,
    });
  }
}
