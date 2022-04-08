import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RentHost } from './entities/rentHost.entity';

@Injectable()
export class RentHostService {
  constructor(
    @InjectRepository(RentHost)
    private readonly rentHostRepository: Repository<RentHost>,
  ) {}

  async findAll() {
    return await this.rentHostRepository.find({
    });
  }

  async findAllwithdeleted() {
    return await this.rentHostRepository.find({
      withDeleted: true,
    });
  }

  async findOne({ rentHostId }) {
    return await this.rentHostRepository.findOne({
      where: { id: rentHostId },
      withDeleted: true,
    });
  }

  async create({ createRentHostInput }) {
    const result = await this.rentHostRepository.save({
      ...createRentHostInput,
    });

    return result;
  }

  async update({ rentHostId, updateRentHostInput }) {
    const rentHost = await this.rentHostRepository.findOne({
      where: { id: rentHostId },
    });

    const newRentHost = {
      ...rentHost,
      ...updateRentHostInput,
    };

    return await this.rentHostRepository.save(newRentHost);
  }

  async delete({ rentHostId }) {
    const result = await this.rentHostRepository.softDelete({ id: rentHostId });
    return result.affected ? true : false;
  }

  async restoreOne({ rentHostId }) {
    const result = await this.rentHostRepository.restore({ id: rentHostId });
    return result.affected ? true : false;
  }
}
