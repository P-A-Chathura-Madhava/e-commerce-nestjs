import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateProductCategoryDto {
    @ApiProperty({
        description: "Product Category Title",
        example: "TVs"
    })
    @IsString()
    title: string;
}
