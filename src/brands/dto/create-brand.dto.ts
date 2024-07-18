import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateBrandDto {
  @ApiProperty({
    description: "Brand Title",
    example: "Sony"
})
  @IsString()
  title: string;
}
