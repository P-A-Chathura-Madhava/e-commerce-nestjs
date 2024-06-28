import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { CreateBrandDto } from './dto/create-brand.dto';

@Controller('brands')
export class BrandsController {
    constructor(
        private readonly brandsService: BrandsService
    ) {}

    @Get()
    async getAllBrands() {
        return this.brandsService.getAllBrands();
    }

    @Get(':id')
    async getABrand(@Param('id') id: number) {
        return this.brandsService.getABrand(id);
    }

    @Post()
    async create(@Body() createBrandDto: CreateBrandDto) {
        return this.brandsService.create(createBrandDto);
    }
}
