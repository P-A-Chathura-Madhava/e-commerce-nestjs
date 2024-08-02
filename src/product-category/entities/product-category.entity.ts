import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'productCategories' })
export class ProductCategory {
  @ApiProperty({
    description: 'Product Category ID',
    example: 1,
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    description: 'Product Category Title',
    example: 'Electronics',
  })
  @Column()
  title: string;
}
