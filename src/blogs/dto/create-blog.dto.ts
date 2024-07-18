import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class CreateBlogDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsString()
  category: string;

  @IsNumber()
  numViews: number;

  @IsBoolean()
  isLiked: boolean;

  @IsBoolean()
  isDisliked: boolean;
}
