import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RentHost } from '../rentHost/entities/rentHost.entity';
import { Rent } from './entities/rent.entity';

@Injectable()
export class RentService {
  constructor(
    @InjectRepository(Rent)
    private readonly rentRepository: Repository<Rent>,
  ) {}

  async findWithdeleted() {
    return await this.rentRepository.find({
      withDeleted: true,
      relations: ['rentHost'],
    });
  }

  async findAll() {
    return await this.rentRepository.find({
      relations: ['rentHost'],
    });
  }

  async findOne({ rentId }) {
    return await this.rentRepository.findOne({
      where: { id: rentId },
      withDeleted: true,
      relations: ['rentHost'],
    });
  }
  

  async create({
    name,
    host,
    star_score,
    rent_pre_number,
    rent_contents,
    createRentInput,
  }) {
    const { rentHostId, ...rentscore } = createRentInput;
    return await this.rentRepository.save({
      name,
      host,
      star_score,
      rent_pre_number,
      rent_contents,
      ...rentscore,
      rentHost: { id: rentHostId },
    });
  }

  async update({ rentId, updateRentInput,name, host,star_score,rent_pre_number, rent_contents }) {
    const rent = await this.rentRepository.findOne({
      where: { id: rentId },
    });

    const newRent = {
      ...rent,
      ...updateRentInput,
      name, 
      host,
      star_score,
      rent_pre_number, 
      rent_contents
    };

    return await this.rentRepository.save(newRent);

  }

  async delete({ rentId }) {
    const result = await this.rentRepository.softDelete({ id: rentId });
    return result.affected ? true : false;
  }

  async restoreOne({ rentId }) {
    const result = await this.rentRepository.restore({ id: rentId });
    return result.affected ? true : false;
  }
}
