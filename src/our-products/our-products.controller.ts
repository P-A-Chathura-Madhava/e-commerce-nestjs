import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { OurProductsService } from './our-products.service';
import { CreateOurProductDto } from './dto/create-our-product.dto';

@Controller('our-products')
export class OurProductsController {
    constructor(
        private readonly ourProductsService: OurProductsService
    ) {}

    @Get()
    async getAllProducts() {
        return this.ourProductsService.getAllProducts();
    }

    @Get(':id')
    async getAProduct(@Param('id') id: string) {
        return this.ourProductsService.getAProduct(id);
    }

    @Post()
    async create(@Body() createOurProductDto: CreateOurProductDto) {
        return this.ourProductsService.create(createOurProductDto);
    }
}
