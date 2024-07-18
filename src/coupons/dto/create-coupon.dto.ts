import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsNumber, IsString } from "class-validator";

export class CreateCouponDto {
    @ApiProperty({
        description: "Coupon Name",
        example: "New Year Season"
    })
    @IsString()
    name: string;

    @ApiProperty({
        description: "Expiry Date",
        example: 2/12/2024
    })
    @IsDateString()
    expiry: Date;

    @ApiProperty({
        description: "Discount",
        example: 20
    })
    @IsNumber()
    discount: number;
}
