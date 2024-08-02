import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CouponsService } from './coupons.service';
import { CreateCouponDto } from './dto/create-coupon.dto';
import { UpdateCouponDto } from './dto/update-coupon.dto';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Coupon } from './entities/coupon.entity';

@ApiTags("Coupons")
@Controller('coupons')
export class CouponsController {
    constructor(
        private readonly couponsService: CouponsService
    ) {}

    @ApiOkResponse()
    @Get()
    async getAllCoupons() {
        return this.couponsService.getAllCoupons();
    }

    @ApiOkResponse({
        type: Coupon
    })
    @ApiBadRequestResponse({description: "Coupon Not Found"})
    @Get(':id')
    async getACoupon(@Param('id') id: number) {
        return this.couponsService.getACoupon(id);
    }

    @ApiCreatedResponse({
        description: "Coupon Created",
        type: Coupon
    })
    @ApiBadRequestResponse({description: "Failed to create the coupon"})
    @Post()
    async create(@Body() createCouponDto: CreateCouponDto) {
        return this.couponsService.create(createCouponDto);
    }

    @ApiOkResponse({
        description: "Coupon Updated",
        type: Coupon
    })
    @ApiBadRequestResponse({description: "Failed to update the coupon"})
    @Patch(':id')
    async update(@Param('id') id: string, @Body() updateCouponDto: UpdateCouponDto) {
        return this.couponsService.updateACoupon(+id, updateCouponDto);
    }

    @ApiOkResponse({
        description: "Coupon Deleted",
        type: Coupon
    })
    @ApiBadRequestResponse({description: "Failed to delete the coupon"})
    @Delete(':id')
    async deleteACoupon(@Param('id') id: string) {
        return this.couponsService.deleteACoupon(+id)
    }
}
