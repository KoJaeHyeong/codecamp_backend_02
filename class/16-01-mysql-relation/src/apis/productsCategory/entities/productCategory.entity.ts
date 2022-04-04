import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity() // 테이블로 만들어줘
export class ProductCategory {
  @PrimaryGeneratedColumn('uuid') // Generated 우리가 따로 안만들어도 알아서 자동으로 만들어 진다.
  id: string;

  @Column()
  name: string;
}
