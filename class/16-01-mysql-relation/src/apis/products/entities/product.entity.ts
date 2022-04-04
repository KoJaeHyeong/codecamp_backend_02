import { ProductCategory } from 'src/apis/productsCategory/entities/productCategory.entity';
import { ProductSaleslocation } from 'src/apis/productsSaleslocation/entities/productSaleslocation.entity';
import { ProductTag } from 'src/apis/productsTag/entities/productTag.entity';
import { User } from 'src/apis/users/entities/user.entity';
import {
  Column,
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
export class Product {
  @PrimaryGeneratedColumn('uuid') // Generated 우리가 따로 안만들어도 알아서 자동으로 만들어 진다.
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column()
  isSoldout: boolean;
  //   soldedAt: Date;

  @JoinColumn()
  @OneToOne(() => ProductSaleslocation) // 1대1인데, 프로덕트세일스로케이션이랑!, 양쪽에 써줄수는 있다.
  productSaleslocation: ProductSaleslocation;

  @ManyToOne(() => ProductCategory) // 다 : 1 // ManytoOJ
  productCategory: ProductCategory;

  @ManyToOne(() => User)
  user: User;

  @JoinTable() // 조인테이블은 둘중 한군데만 해줘도 된다.
  @ManyToMany(() => ProductTag, (productTags) => productTags.products)
  productTags: ProductTag[];
}
