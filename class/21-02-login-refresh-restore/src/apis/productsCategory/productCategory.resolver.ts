import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { ProductCategory } from './entities/productCategory.entity';
import { ProductCategoryService } from './productCategory.service';

@Resolver()
export class ProductCategoryResolver {
  constructor(
    private readonly productCategoryService: ProductCategoryService,
  ) {}

  @Mutation(() => ProductCategory) // 프로덕트 카테고리에 대해서 전체를 받아 올 수 있다.
  createProductCategory(
    @Args('name') name: string, //
  ) {
    return this.productCategoryService.create({ name });
  }
}
