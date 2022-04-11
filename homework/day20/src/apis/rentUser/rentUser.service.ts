import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RentUser } from './entities/rentUser.entity';

@Injectable()
export class RentUserService {
  constructor(
    @InjectRepository(RentUser)
    private readonly rentUserRepository: Repository<RentUser>,
  ) {}

  async findAll() {
    return await this.rentUserRepository.find({
      relations: ['rent'],
    });
  }

  async findOne({ rentUserId }) {
    return await this.rentUserRepository.findOne({
      where: { id: rentUserId },
      relations: ['rent'],
    });
  }

  async create({ createRentUserInput }) {
    const { rentId, email, ...userInfo } = createRentUserInput;

    const user = await this.rentUserRepository.findOne({ email });
    if (user) throw new ConflictException('이미 가입했자나!! 정신차려!!');

    return await this.rentUserRepository.save({
      ...userInfo,
      email: email,
      rent: { id: rentId },
    });
  }

  async update({ rentUserId, updateRentUserInput }) {
    const rentUser = await this.rentUserRepository.findOne({
      where: { id: rentUserId },
    });

    const newRent = {
      ...rentUser,
      ...updateRentUserInput,
    };

    return await this.rentUserRepository.save(newRent);
  }

  async delete({ rentUserId }) {
    const result = await this.rentUserRepository.softDelete({ id: rentUserId });
    return result.affected ? true : false;
  }
}
