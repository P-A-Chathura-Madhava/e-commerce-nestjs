import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'brands' })
export class Brand {
  @ApiProperty({
    description: 'Brand ID',
    example: 1,
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    description: 'Brand Name',
    example: 'Sony',
  })
  @Column()
  title: string;
}
