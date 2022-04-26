import { ElasticsearchService } from '@nestjs/elasticsearch';
import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { createProductInput } from './dto/createProduct.input';
import { updateProductInput } from './dto/updateProduct.input';
import { Product } from './entities/product.entity';
import { ProductService } from './product.service';

@Resolver()
export class ProductResolver {
  constructor(
    private readonly productService: ProductService, //

    private readonly elasticsearchService: ElasticsearchService,
  ) {}

  @Query(() => [Product]) // 전체 리스트를 뽑아내기 때문에 배열 형태로
  async fetchProducts(
    @Args('search') search: string, //
  ) {
    // 엘라스틱서치에서 조회 연습하기!!
    const result = await this.elasticsearchService.search({
      index: 'myproduct0222',
      query: {
        match: {
          description: search,
        },
      },
    });
    console.log('==================');

    console.log(JSON.stringify(result, null, '  ')); // 깔끔하게 보는 팁.

    // 엘라스틱 서치에서 조회해보기 위해 임시로 주석!
    // return this.productService.findAll();
  }

  @Query(() => Product)
  fetchProduct(
    @Args('productId') productId: string, //
  ) {
    return this.productService.findOne({ productId });
  }

  @Mutation(() => Product) // 프로덕트 카테고리에 대해서 전체를 받아 올 수 있다.
  async createProduct(
    @Args('createProductInput') createProductInput: createProductInput,
  ) {
    // 엘라스틱서치에서 등록 연습하기!!! ====> 연습일뿐, 실제로는 MySQL에 저장할 예정!
    // await this.elasticsearchService.create({
    //   id: 'myid',
    //   index: 'myproduct', // elasticsearch에서는 index는 테이블을 의미 한다.
    //   document: {
    //     name: '철수',
    //     age: 13,
    //     school: '다람쥐초등학교',
    //   },
    // });

    // 엘라스틱 서치에서 등록해보기 위해 임시로 주석!
    return this.productService.create({ createProductInput });
  }

  @Mutation(() => Product)
  async updateProduct(
    @Args('productId') productId: string,
    @Args('updateProductInput') updateProductInput: updateProductInput,
  ) {
    // 판매 완료가 되었는지 확인해보기
    return await this.productService.checkSoldout({ productId });

    // 수정하기
    return await this.productService.update({ productId, updateProductInput });
  } // 순서대로 해야 하기 때문에 await를 써줬다.

  @Mutation(() => Boolean)
  deleteProduct(
    @Args('prductId') productId: string, //
  ) {
    return this.productService.delete({ productId });
  }
}
