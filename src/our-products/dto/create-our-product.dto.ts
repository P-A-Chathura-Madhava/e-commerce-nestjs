import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateOurProductDto {
  @ApiProperty({
    description: "Product Name",
    example: "Sony Bravia TV"
})
  @IsString()
  name: string;

  @ApiProperty({
    description: "Price",
    example: 80000
})
  @IsNumber()
  price: number;

  @ApiProperty({
    description: "Description",
    example: "Best TV"
})
  @IsString()
  description: string;

  @ApiProperty({
    description: "Category",
    example: "Electronics"
})
  @IsString()
  category: string;
}
