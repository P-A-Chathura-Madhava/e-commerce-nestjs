import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'productCategories'})
export class ProductCategory {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;
}
