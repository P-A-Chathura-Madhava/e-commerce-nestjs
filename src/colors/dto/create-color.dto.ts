import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateColorDto {
  @ApiProperty({
    description: 'Color of the product',
    example: 'Red',
  })
  @IsString()
  title: string;
}
