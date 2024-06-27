import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ClothingProductsService } from './clothing-products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

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

    @Patch(':id')
    public async UpdateAProduct(@Param('id') id: string ,@Body() updateProductDto: UpdateProductDto) {
        // console.log(id);
        // console.log(updateProductDto);
        return await this.clothingService.UpdateAProduct(id, updateProductDto);    
    }
}
