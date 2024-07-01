import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Coupon } from './entities/coupon.entity';
import { Repository } from 'typeorm';
import { CreateCouponDto } from './dto/create-coupon.dto';
import { UpdateCouponDto } from './dto/update-coupon.dto';

@Injectable()
export class CouponsService {
    constructor(
        @InjectRepository(Coupon)
        private readonly couponRepository: Repository<Coupon>
    ) {}

    async create(createCouponDto: CreateCouponDto) {
        const coupon = this.couponRepository.create(createCouponDto);
        return await this.couponRepository.save(coupon);      
    }

    async updateACoupon(id: number, updateCouponDto: UpdateCouponDto) {
        const coupon = await this.getACoupon(id);
        if (!coupon) {
          throw new NotFoundException();
        }
        Object.assign(coupon, updateCouponDto);        
        return await this.couponRepository.save(coupon);
    }

    async getAllCoupons() {
        return await this.couponRepository.find()
    }

    async getACoupon(id: number) {
        return await this.couponRepository.findOne({where: {id}})
    }

    async deleteACoupon(id: number) {
        const coupon = await this.getACoupon(id);
        if (!coupon) {
          throw new NotFoundException();
        }    
        return await this.couponRepository.remove(coupon);
    }
}
