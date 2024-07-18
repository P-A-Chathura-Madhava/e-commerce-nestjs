import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class CreateBlogDto {
  @ApiProperty({
    description: "Blog Title",
    example: "Sony"
})
  @IsString()
  title: string;

  @ApiProperty({
    description: "Blog Description",
    example: "Details about a product"
})
  @IsString()
  description: string;

  @ApiProperty({
    description: "Blog Category",
    example: "TV"
})
  @IsString()
  category: string;

  @ApiProperty({
    description: "Number of Views",
    example: 20
})
  @IsNumber()
  numViews: number;

  @ApiProperty({
    description: "Likes",
    example: true
})
  @IsBoolean()
  isLiked: boolean;

  @ApiProperty({
    description: "Dislikes",
    example: false
})
  @IsBoolean()
  isDisliked: boolean;
}
