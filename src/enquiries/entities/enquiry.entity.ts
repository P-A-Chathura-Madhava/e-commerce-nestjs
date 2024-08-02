import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum EnquiryStatus {
    SUBMITTED = "Submitted",
    CONNECTED = "Contacted",
    IN_PROGRESS = "In Progress",
    RESOLVED = "Resolved"
}

@Entity({name: 'enquiries'})
export class Enquiry {
    @ApiProperty({
        description: "Enquiry ID",
        example: 1
    })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({
        description: "Enquiry Heading",
        example: "Color Faded"
    })
    @Column()
    name: string;

    @ApiProperty({
        description: "Enquiry E-mail",
        example: "kasun@gmail.com"
    })
    @Column()
    email: string;

    @ApiProperty({
        description: "Mobile Number",
        example: "077-1234546"
    })
    @Column()
    mobile: string;

    @ApiProperty({
        description: "Comment",
        example: "Color faded when I get the product"
    })
    @Column()
    comment: string;

    @ApiProperty({
        description: "Enquiry State",
        example: "Submitted",
        default: EnquiryStatus.SUBMITTED
    })
    @Column({default: EnquiryStatus.SUBMITTED})
    status: EnquiryStatus
}
