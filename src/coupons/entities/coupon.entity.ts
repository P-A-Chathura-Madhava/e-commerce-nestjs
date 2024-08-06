import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'coupons' })
export class Coupon {
  @ApiProperty({
    description: 'Coupon ID',
    example: 1,
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    description: 'Coupon Name',
    example: 'New Year Special',
  })
  @Column()
  name: string;

  @ApiProperty({
    description: 'Expiary Date',
    example: '04/01/2024',
  })
  @Column()
  expiry: Date;

  @ApiProperty({
    description: 'Discount Percentage',
    example: 20,
  })
  @Column()
  discount: number;
}
