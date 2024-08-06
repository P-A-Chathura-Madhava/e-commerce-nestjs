import { HttpException, HttpStatus } from "@nestjs/common";

export class EnquiryNotFound extends HttpException {
    constructor() {
      super('Enquiry Not Found', HttpStatus.NOT_FOUND);
    }
  }