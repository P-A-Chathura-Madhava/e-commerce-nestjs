import { HttpException, HttpStatus } from "@nestjs/common";

export class ColorNotFound extends HttpException {
    constructor() {
      super('Color Not Found', HttpStatus.NOT_FOUND);
    }
  }