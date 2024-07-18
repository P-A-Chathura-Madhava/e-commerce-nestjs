import { IsDateString, IsNumber, IsString } from "class-validator";

export class CreateCouponDto {
    @IsString()
    name: string;

    @IsDateString()
    expiry: Date;

    @IsNumber()
    discount: number;
}
