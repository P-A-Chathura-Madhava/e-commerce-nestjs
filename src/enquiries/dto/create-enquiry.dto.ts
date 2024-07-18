import { IsString } from "class-validator";
import { EnquiryStatus } from "../entities/enquiry.entity";
import { ApiProperty } from "@nestjs/swagger";

export class CreateEnquiryDto {
    @ApiProperty({
        description: "Enquiry Name",
        example: "Electronics"
    })
    @IsString()
    name: string;

    @ApiProperty({
        description: "Email",
        example: "kasun@gmail.com"
    })
    @IsString()
    email: string;

    @ApiProperty({
        description: "Mobile Number",
        example: "077-1234546"
    })
    @IsString()
    mobile: string;

    @ApiProperty({
        description: "Comment",
        example: "Good Product"
    })
    @IsString()
    comment: string;
    
    @ApiProperty({
        description: "Status",
        example: "Sold"
    })
    status: EnquiryStatus;
}
