import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ClothingProductsService } from './clothing-products.service';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('clothing-products')
export class ClothingProductsController {
    constructor(private readonly clothingService: ClothingProductsService) {}

    @Get()
    public async getAllProducts() {
        return await this.clothingService.getAllProducts();
    }

    @Get(':id')
    public async getAProduct(@Param('id') id: string) {
        return await this.clothingService.getAProduct(id);        
    }

    @Post()
    public async createAProduct(@Body() createProductDto: CreateProductDto) {
        // console.log(createProductDto);
        return await this.clothingService.createAProduct(createProductDto);       
    }
}
