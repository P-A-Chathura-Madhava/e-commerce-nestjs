import { Body, Controller, Get, Post } from '@nestjs/common';
import { ClothingProductsService } from './clothing-products.service';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('clothing-products')
export class ClothingProductsController {
    constructor(private readonly clothingService: ClothingProductsService) {}

    @Get()
    public async getAllProducts() {
        return await this.clothingService.getAllProducts();
    }

    @Post()
    public async createAProduct(@Body() createProductDto: CreateProductDto) {
        // console.log(createProductDto);
        return await this.clothingService.createAProduct(createProductDto);       
    }
}
