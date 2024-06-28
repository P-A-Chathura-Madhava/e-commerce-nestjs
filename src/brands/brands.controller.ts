import { Body, Controller, Get, Post } from '@nestjs/common';
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

    @Post()
    async create(@Body() createBrandDto: CreateBrandDto) {
        return this.brandsService.create(createBrandDto);
    }
}
