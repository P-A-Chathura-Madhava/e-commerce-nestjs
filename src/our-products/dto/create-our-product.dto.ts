import { IsNumber, IsString } from 'class-validator';

export class CreateOurProductDto {
  @IsString()
  name: string;

  @IsNumber()
  price: number;

  @IsString()
  description: string;

  @IsString()
  category: string;
}
