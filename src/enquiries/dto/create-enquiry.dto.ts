import { IsString } from "class-validator";
import { EnquiryStatus } from "../entities/enquiry.entity";

export class CreateEnquiryDto {
    @IsString()
    name: string;

    @IsString()
    email: string;

    @IsString()
    mobile: string;

    @IsString()
    comment: string;
    
    status: EnquiryStatus;
}
