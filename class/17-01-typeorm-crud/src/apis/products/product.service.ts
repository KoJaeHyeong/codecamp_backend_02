import {
  HttpException,
  HttpStatus,
  Injectable,
  UnprocessableEntityException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ifError, throws } from 'assert';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async findAll() {
    return await this.productRepository.find();
  }

  async findOne({ productId }) {
    return await this.productRepository.findOne({ id: productId });
  }

  async create({ createProductInput }) {
    // 상품을 데이터베이스에 저장
    const result = await this.productRepository.save({
      ...createProductInput,

      // 하나하나 직접 나열하기
      // name: createProductInput.name, // 프론트엔드에서 받아온 개체들
      // description: createProductInput.description,
      // price: createProductInput.price,
    });

    console.log(result);

    return result;
  }

  async update({ productId, updateProductInput }) {
    // 등록할때에는 Id가 필요 없지만, 업데이트 할때에는 Id가 필요해서 그걸 바탕으로 수정한다.
    const product = await this.productRepository.findOne({
      where: { id: productId },
    });

    const newProduct = {
      ...product, // 원래 프로덕트 안에 있던 애들
      ...updateProductInput, // 수정할 내용

      // id: product.id,
      // name: product.name,
      // description: product.description,
      // price: product.price,
      // isSoldout: product.isSoldout,

      // description: updateProductInput.description =>객체 성질!! : 키가 동일 할떄, 위는 없어지고 아래것만 살아남음.
      // price: updateProductInput.price 얘네는 수정하고 싶은거
      // 위에 처럼 안한 얘들은 내용 그대로
    };

    return await this.productRepository.save(newProduct);
  }

  async checkSoldout({ productId }) {
    await this.productRepository.findOne({
      where: { id: productId },
    });
    if (productId.isSoldout)
      throw new UnprocessableEntityException('이미 재형이가 가져갔다! ㅡㅡ');

    // 위에랑 같은 내용
    // if(product.isSoldout){ // 판매가 완료 되었다면,
    //   throw new HttpException('이미 재형이가 가져갔다! ㅡㅡ', HttpStatus.UNPROCESSABLE_ENTITY,); //예외처리, throw : 프론트한테 전해준다.
    // }
  }
}
