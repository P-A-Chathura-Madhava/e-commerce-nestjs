import { HttpException, HttpStatus } from "@nestjs/common";

export class BrandNotFound extends HttpException {
    constructor() {
      super('Brand Not Found', HttpStatus.NOT_FOUND);
    }
  }