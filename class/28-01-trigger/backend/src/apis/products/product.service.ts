import {
  HttpException,
  HttpStatus,
  Injectable,
  UnprocessableEntityException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ifError, throws } from 'assert';
import { Repository } from 'typeorm';
import { ProductSaleslocation } from '../productsSaleslocation/entities/productSaleslocation.entity';
import { ProductTag } from '../productsTag/entities/productTag.entity';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,

    @InjectRepository(ProductSaleslocation)
    private readonly productSaleslocationRepository: Repository<ProductSaleslocation>,

    @InjectRepository(ProductTag)
    private readonly productTagRepository: Repository<ProductTag>,
  ) {}

  async findAll() {
    return await this.productRepository.find({
      relations: ['productSaleslocation', 'productCategory', 'productTags'],
    });
  }

  async findOne({ productId }) {
    return await this.productRepository.findOne({
      where: { id: productId },
      relations: ['productSaleslocation', 'productCategory', 'productTags'],
    });
  }

  async create({ createProductInput }) {
    // 1. 상품만 등록하는 경우
    // 상품을 데이터베이스에 저장
    // const result = await this.productRepository.save({
    //   ...createProductInput,

    // 하나하나 직접 나열하기
    // name: createProductInput.name, // 프론트엔드에서 받아온 개체들
    // description: createProductInput.description,
    // price: createProductInput.price,
    // });

    // console.log(result);

    // 2. 상품과 상품거래위치를 같이 등록하는 경우
    const { productSaleslocation, productCategoryId, productTags, ...product } =
      createProductInput; // 구조분해할당에서 삭제하기 방법

    const result = await this.productSaleslocationRepository.save({
      ...productSaleslocation,
    });

    // productTags // [#"전자제품", #"영등포", #"컴퓨터"]
    const result2 = [];
    for (let i = 0; i < productTags.length; i++) {
      const tagname = productTags[i].replace('#', ''); // 앞에 붙은 # 제거!

      // 이미 등록된 태그인지 확인해보기
      const prevTag = await this.productTagRepository.findOne({
        name: tagname,
      });

      //기존에 태그가 존재한다면
      if (prevTag) {
        result2.push(prevTag);

        // 기존에 태그가 없었다면
      } else {
        const newTag = await this.productTagRepository.save({ name: tagname });
        result2.push(newTag);
      }
    }

    return await this.productRepository.save({
      ...product, // 위에서 둘로 나눠줬기 때문에, 이렇게 쓰면 됨.
      productSaleslocation: result, // id만 넣게 되면 프론트로 반환할때, id밖에 주지 못한다. result로 하게 되면 모든 값을 보여 줄 수 있다.
      productCategory: { id: productCategoryId }, // 나의 선택임... 전체를 받아올지 id만 받아올지., // 카테고리 추가(result 통째로 넣기 vs id만 넣기)
      productTags: result2, // 결국 Many to Many 만드는 거나 다른거나, 별로 어려운건 없다.... 비슷비슷하다.
    });
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
    // 판매가 완료되었는지 구분!
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

  async delete({ productId }) {
    // 1. 실제 삭제
    // const result = await this.productRepository.delete({ id: productId }); // productId는 프론트에서 받아와야 한다.
    // return result.affected ? true : false;

    // 2. 소프트 삭제(직접 구현) - isDeleted entity에서 isdeleted: bollean 설정 일때!
    // this.productRepository.update({ id: productId }, { isDeleted: true });

    // 3. 소프트 삭제(직접 구현) - deletedAt
    // this.productRepository.update({ id: productId }, { deletedAt: new Date() });

    // 4. 소프트 삭제(TypeORM 제공) - softRemove
    // this.productRepository.softRemove({ id: productId }); // id로만 삭제 가능

    // 5. 소프트 삭제(TypeORM 제공) - softDelete
    const result = await this.productRepository.softDelete({ id: productId }); // 다양한 조건으로 삭제 가능!!
    return result.affected ? true : false; // affected는 영향을 줬다?? 그런 느낌!
  }
}
