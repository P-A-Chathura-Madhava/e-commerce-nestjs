import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateBlogCategoryDto {
    @ApiProperty({
        description: "Blog Category",
        example: "Electronics",
    })
    @IsString()
    title: string;
}
