import { HttpException, HttpStatus } from "@nestjs/common";

export class ProductCategoryNotFound extends HttpException {
    constructor() {
      super('Product Category Not Found', HttpStatus.NOT_FOUND);
    }
  }