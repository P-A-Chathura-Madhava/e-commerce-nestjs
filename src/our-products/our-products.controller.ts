import { Body, Controller, Post } from '@nestjs/common';
import { OurProductsService } from './our-products.service';
import { CreateOurProductDto } from './dto/create-our-product.dto';

@Controller('our-products')
export class OurProductsController {
    constructor(
        private readonly ourProductsService: OurProductsService
    ) {}

    @Post()
    async create(@Body() createOurProductDto: CreateOurProductDto) {
        return this.ourProductsService.create(createOurProductDto);
    }
}
