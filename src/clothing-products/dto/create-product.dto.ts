import { IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  title: string;

  @IsNumber()
  price: number;

  @IsString()
  description: string;

  @IsString()
  image: string;

  @IsString()
  category: string;
}
