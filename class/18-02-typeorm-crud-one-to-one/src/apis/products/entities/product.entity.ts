import { Field, ObjectType, Int } from '@nestjs/graphql';
import { ProductCategory } from 'src/apis/productsCategory/entities/productCategory.entity';
import { ProductSaleslocation } from 'src/apis/productsSaleslocation/entities/productSaleslocation.entity';
import { ProductTag } from 'src/apis/productsTag/entities/productTag.entity';
import { User } from 'src/apis/users/entities/user.entity';
import {
  Column,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity() // 테이블로 만들어줘
@ObjectType()
export class Product {
  @PrimaryGeneratedColumn('uuid') // Generated 우리가 따로 안만들어도 알아서 자동으로 만들어 진다.
  @Field(() => String)
  id: string;

  @Field(() => String)
  @Column()
  name: string;

  @Field(() => String)
  @Column()
  description: string;

  @Field(() => Int)
  @Column()
  price: number;

  @Column({ default: false }) // 등록인데 이걸 적을필요가 없다!! 그래서초기설정 false로 해준다. 판매x
  @Field(() => Boolean)
  isSoldout: boolean;
  //   soldedAt: Date;

  @DeleteDateColumn()
  deleted: Date;

  @JoinColumn()
  @OneToOne(() => ProductSaleslocation) // 1대1인데, 프로덕트세일스로케이션이랑!, 양쪽에 써줄수는 있다.
  @Field(() => ProductSaleslocation)
  productSaleslocation: ProductSaleslocation;

  @ManyToOne(() => ProductCategory) // 다 : 1 // ManytoOJ
  @Field(() => ProductCategory)
  productCategory: ProductCategory;

  @ManyToOne(() => User)
  @Field(() => User)
  user: User;

  @JoinTable() // 조인테이블은 둘중 한군데만 해줘도 된다.
  @ManyToMany(() => ProductTag, (productTags) => productTags.products)
  @Field(() => [ProductTag]) // 배열이기 때문에 배열형태로 감싸줘야 한다.
  productTags: ProductTag[];
}
