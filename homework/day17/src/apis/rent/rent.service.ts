import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Rent } from './entities/rent.entity';

@Injectable()
export class RentService {
  constructor(
    @InjectRepository(Rent)
    private readonly rentRepository: Repository<Rent>,
  ) {}

  async findAll() {
    return await this.rentRepository.find();
  }

  async findOne({ rentId }) {
    return await this.rentRepository.findOne({ id: rentId });
  }

  async create({
    name,
    host,
    star_score,
    rent_pre_number,
    rent_contents,
    createRentInput,
  }) {
    const result = await this.rentRepository.save({
      name,
      host,
      star_score,
      rent_pre_number,
      rent_contents,
      ...createRentInput,
    });

    console.log(result);
    return result;
  }

  async update({ rentId, updateRentInput }) {
    const rent = await this.rentRepository.findOne({
      where: { id: rentId },
    });

    const newRent = {
      ...rent,
      ...updateRentInput,
    };

    return await this.rentRepository.save(newRent);
  }
}
