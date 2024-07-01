import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'blog-category'})
export class BlogCategory {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;
}
