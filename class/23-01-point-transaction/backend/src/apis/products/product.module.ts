import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductResolver } from './product.resolver';
import { ProductService } from './product.service';
import { Product } from './entities/product.entity';
import { ProductSaleslocation } from '../productsSaleslocation/entities/productSaleslocation.entity';
import { ProductTag } from '../productsTag/entities/productTag.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Product, //
      ProductSaleslocation,
      ProductTag,
    ]),
  ],
  providers: [
    ProductResolver, //
    ProductService,
  ],
})
export class ProductModule {}
