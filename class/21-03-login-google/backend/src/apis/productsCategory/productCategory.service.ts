import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductCategory } from './entities/productCategory.entity';

@Injectable()
export class ProductCategoryService {
  constructor(
    @InjectRepository(ProductCategory)
    private readonly productCategoryRepository: Repository<ProductCategory>,
  ) {}

  async create({ name }) {
    // 카테고리를 데이터베이스에 저장
    const result = await this.productCategoryRepository.save({ name }); // 내용을 DB에 저장해줘., value를 생략해줘서 name만 쓴다., // create를 사용하게 되면 의류라는 네임이 DB에 저장된다.

    return result;
  }
}
