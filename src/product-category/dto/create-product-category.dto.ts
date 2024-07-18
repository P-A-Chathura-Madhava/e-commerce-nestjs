import { IsString } from "class-validator";

export class CreateProductCategoryDto {
    @IsString()
    title: string;
}
