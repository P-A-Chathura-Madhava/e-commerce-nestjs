import { Body, Controller, Post } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { CreateBrandDto } from './dto/create-brand.dto';

@Controller('brands')
export class BrandsController {
    constructor(
        private readonly brandsService: BrandsService
    ) {}

    @Post()
    async create(@Body() createBrandDto: CreateBrandDto) {
        return this.brandsService.create(createBrandDto);
    }
}
