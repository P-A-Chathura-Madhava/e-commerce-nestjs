import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CouponsService } from './coupons.service';
import { CreateCouponDto } from './dto/create-coupon.dto';
import { UpdateCouponDto } from './dto/update-coupon.dto';

@Controller('coupons')
export class CouponsController {
    constructor(
        private readonly couponsService: CouponsService
    ) {}

    @Get()
    async getAllCoupons() {
        return this.couponsService.getAllCoupons();
    }

    @Get(':id')
    async getACoupon(@Param('id') id: number) {
        return this.couponsService.getACoupon(id);
    }

    @Post()
    async create(@Body() createCouponDto: CreateCouponDto) {
        return this.couponsService.create(createCouponDto);
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() updateCouponDto: UpdateCouponDto) {
        return this.couponsService.updateACoupon(+id, updateCouponDto);
    }

    @Delete(':id')
    async deleteACoupon(@Param('id') id: string) {
        return this.couponsService.deleteACoupon(+id)
    }
}
