import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'blogs'})
export class Blog {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    category: string;

    @Column()
    numViews: number;

    @Column()
    isLiked: boolean;

    @Column()
    isDisliked: boolean;
}
