import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RentCustomer } from './entities/rentCustomer.entity';

@Injectable()
export class RentCustomerService {
  constructor(
    @InjectRepository(RentCustomer)
    private readonly rentCustomerRepository: Repository<RentCustomer>,
  ) {}

  async findAll() {
    return await this.rentCustomerRepository.find({
      relations: ['rent'],
    });
  }

  async findOne({ rentCustomerId }) {
    return await this.rentCustomerRepository.findOne({
      where: { id: rentCustomerId },
      relations: ['rent'],
    });
  }

  async create({ createRentCustomerInput }) {
    const { rentId, ...contents } = createRentCustomerInput;
    return await this.rentCustomerRepository.save({
      ...contents,
      rent: { id: rentId },
    });
  }
}
