import { HttpException, HttpStatus } from "@nestjs/common";

export class CouponNotFound extends HttpException {
    constructor() {
      super('Coupon Not Found', HttpStatus.NOT_FOUND);
    }
  }