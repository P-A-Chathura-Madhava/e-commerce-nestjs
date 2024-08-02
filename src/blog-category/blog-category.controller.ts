import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { BlogCategoryService } from './blog-category.service';
import { CreateBlogCategoryDto } from './dto/create-blog-category.dto';
import { UpdateBlogCategoryDto } from './dto/update-blog-category.dto';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { BlogCategory } from './entities/blog-category.entity';

@ApiTags("Blog Categories")
@Controller('blog-category')
export class BlogCategoryController {
    constructor(
        private readonly blogCategoryService: BlogCategoryService
    ) {}

    @ApiOkResponse()
    @Get()
    async getAllBlogCategories() {
        return this.blogCategoryService.getAllBlogCategories();
    }

    @ApiOkResponse({
        type: BlogCategory
    })
    @ApiBadRequestResponse({description: "Blog Category not found"})
    @Get(':id')
    async getABlogCategory(@Param('id') id: number) {
        return this.blogCategoryService.getABlogCategory(id);
    }

    @ApiCreatedResponse({
        description: "Blog Category Created",
        type: BlogCategory
    })
    @ApiBadRequestResponse({description: "Failed to create the Blog Category"})
    @Post()
    async create(@Body() createBlogCategoryDto: CreateBlogCategoryDto) {
        return this.blogCategoryService.create(createBlogCategoryDto);
    }

    @ApiOkResponse({
        description: "Blog Category Updated",
        type: BlogCategory
    })
    @ApiBadRequestResponse({description: "Failed to update the Blog Category"})
    @Patch(':id')
    async update(@Param('id') id: string, @Body() updateBlogCategoryDto: UpdateBlogCategoryDto) {
        return this.blogCategoryService.updateABlogCategory(+id, updateBlogCategoryDto);
    }

    @ApiOkResponse({
        description: "Blog Category Deleted",
        type: BlogCategory
    })
    @ApiBadRequestResponse({description: "Failed to delete the Blog Category"})
    @Delete(':id')
    async deleteABlogCategory(@Param('id') id: string) {
        return this.blogCategoryService.deleteABlogCategory(+id)
    }
}
