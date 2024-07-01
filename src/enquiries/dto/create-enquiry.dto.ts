import { EnquiryStatus } from "../entities/enquiry.entity";

export class CreateEnquiryDto {
    name: string;
    email: string;
    mobile: string;
    comment: string;
    status: EnquiryStatus;
}
