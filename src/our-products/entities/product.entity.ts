import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'products'})
export class Product {
    @ApiProperty({
        description: "Product ID",
        example: 1
    })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({
        description: "Product Name",
        example: "Desktop PC"
    })
    @Column()
    name: string;

    @ApiProperty({
        description: "Price",
        example: 420000
    })
    @Column()
    price: number;

    @ApiProperty({
        description: "Product Description",
        example: "Best for Gaming"
    })
    @Column({type: 'text', nullable: true})
    description: string;

    @ApiProperty({
        description: "Product Category",
        example: "Electronics"
    })
    @Column({type: 'text'})
    category: string;
}
