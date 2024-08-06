import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @ApiProperty({
    description: 'Product Title',
    example: 'Shirt',
  })
  @IsString()
  title: string;

  @ApiProperty({
    description: 'Price',
    example: 2000,
  })
  @IsNumber()
  price: number;

  @ApiProperty({
    description: 'Description',
    example: 'New Shirt',
  })
  @IsString()
  description: string;

  @ApiProperty({
    description: 'Images',
    example: 'image url',
  })
  @IsString()
  image: string;

  @ApiProperty({
    description: 'Category',
    example: 'Clothes',
  })
  @IsString()
  category: string;
}
