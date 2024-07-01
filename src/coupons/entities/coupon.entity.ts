import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'coupons'})
export class Coupon {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    expiry: Date;

    @Column()
    discount: number
}
