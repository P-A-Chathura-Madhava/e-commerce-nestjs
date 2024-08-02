import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ProductCategoryService } from './product-category.service';
import { CreateProductCategoryDto } from './dto/create-product-category.dto';
import { UpdateProductCategoryDto } from './dto/update-product-category.dto';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ProductCategory } from './entities/product-category.entity';

@ApiTags("Product Categories")
@Controller('product-category')
export class ProductCategoryController {
    constructor(
        private readonly productCategoriesService: ProductCategoryService
    ) {}

    @ApiOkResponse()
    @Get()
    async getAllProductCategories() {
        return this.productCategoriesService.getAllProductCategories();
    }

    @ApiOkResponse({
        type: ProductCategory
    })
    @ApiBadRequestResponse({description: "Product Category Not Found"})
    @Get(':id')
    async getAProductCategory(@Param('id') id: number) {
        return this.productCategoriesService.getAProductCategory(id);
    }

    @ApiCreatedResponse({
        description: "Product Category Created",
        type: ProductCategory
    })
    @ApiBadRequestResponse({description: "Failed to create the Product Category"})
    @Post()
    async create(@Body() createProductCategoryDto: CreateProductCategoryDto) {
        return this.productCategoriesService.create(createProductCategoryDto);
    }

    @ApiOkResponse({
        description: "Product Category Updated",
        type: ProductCategory
    })
    @ApiBadRequestResponse({description: "Failed to update the Product Category"})
    @Patch(':id')
    async update(@Param('id') id: string, @Body() updateProductCategoryDto: UpdateProductCategoryDto) {
        return this.productCategoriesService.updateAProductCategory(+id, updateProductCategoryDto);
    }

    @ApiOkResponse({
        description: "Product Category Deleted",
        type: ProductCategory
    })
    @ApiBadRequestResponse({description: "Failed to delete the Product Category"})
    @Delete(':id')
    async deleteAProductCategory(@Param('id') id: string) {
        return this.productCategoriesService.deleteAProductCategory(+id)
    }
}
