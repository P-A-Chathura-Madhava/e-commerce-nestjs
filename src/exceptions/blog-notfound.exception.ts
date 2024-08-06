import { HttpException, HttpStatus } from "@nestjs/common";

export class BlogNotFound extends HttpException {
    constructor() {
      super('Blog Not Found', HttpStatus.NOT_FOUND);
    }
  }