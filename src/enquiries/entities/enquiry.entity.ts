import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum EnquiryStatus {
    SUBMITTED = "Submitted",
    CONNECTED = "Contacted",
    IN_PROGRESS = "In Progress",
    RESOLVED = "Resolved"
}

@Entity({name: 'enquiries'})
export class Enquiry {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    mobile: string;

    @Column()
    comment: string;

    @Column({default: EnquiryStatus.SUBMITTED})
    status: EnquiryStatus
}
