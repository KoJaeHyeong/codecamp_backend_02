import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { throwIfEmpty } from 'rxjs';
import { createProductInput } from './dto/createProduct.input';
import { updateProductInput } from './dto/updateProduct.input';
import { Product } from './entities/product.entity';
import { ProductService } from './product.service';

@Resolver()
export class ProductResolver {
  constructor(
    private readonly productService: ProductService, //
  ) {}

  @Query(() => [Product]) // 전체 리스트를 뽑아내기 때문에 배열 형태로
  fetchProducts() {
    return this.productService.findAll();
  }

  @Query(() => Product)
  fetchProduct(
    @Args('productId') productId: string, //
  ) {
    return this.productService.findOne({ productId });
  }

  @Mutation(() => Product) // 프로덕트 카테고리에 대해서 전체를 받아 올 수 있다.
  createProduct(
    @Args('createProductInput') createProductInput: createProductInput,
  ) {
    return this.productService.create({ createProductInput });
  }

  @Mutation(() => Product)
  async updateProduct(
    @Args('productId') productId: string,
    @Args('updateProductInput') updateProductInput: updateProductInput,
  ) {
    // 판매 완료가 되었는지 확인해보기
    await this.productService.checkSoldout({ productId });

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
