import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ProductCategoryService } from './product-category.service';
import { CreateProductCategoryDto } from './dto/create-product-category.dto';
import { UpdateProductCategoryDto } from './dto/update-product-category.dto';

@Controller('product-category')
export class ProductCategoryController {
    constructor(
        private readonly productCategoriesService: ProductCategoryService
    ) {}

    @Get()
    async getAllProductCategories() {
        return this.productCategoriesService.getAllProductCategories();
    }

    @Get(':id')
    async getAProductCategory(@Param('id') id: number) {
        return this.productCategoriesService.getAProductCategory(id);
    }

    @Post()
    async create(@Body() createProductCategoryDto: CreateProductCategoryDto) {
        return this.productCategoriesService.create(createProductCategoryDto);
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() updateProductCategoryDto: UpdateProductCategoryDto) {
        return this.productCategoriesService.updateAProductCategory(+id, updateProductCategoryDto);
    }

    @Delete(':id')
    async deleteAProductCategory(@Param('id') id: string) {
        return this.productCategoriesService.deleteAProductCategory(+id)
    }
}
