import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'blog-category'})
export class BlogCategory {
    @ApiProperty({
        description: "Blog Category ID",
        example: 1
    })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({
        description: "Title",
        example: "Electronics"
    })
    @Column()
    title: string;
}
