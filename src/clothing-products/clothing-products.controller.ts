import { Controller, Get } from '@nestjs/common';
import { ClothingProductsService } from './clothing-products.service';

@Controller('clothing-products')
export class ClothingProductsController {
    constructor(private readonly clothingService: ClothingProductsService) {}

    @Get()
    public async getAllProducts() {
        return await this.clothingService.getAllProducts();
    }
}
