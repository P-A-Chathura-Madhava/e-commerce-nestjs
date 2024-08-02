import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'colors'})
export class Color {
    @ApiProperty({
        description: "Color ID",
        example: 1
    })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({
        description: "Color Name",
        example: "White"
    })
    @Column()
    title: string;
}
