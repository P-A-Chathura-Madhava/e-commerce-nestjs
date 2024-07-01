import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { BlogCategoryService } from './blog-category.service';
import { CreateBlogCategoryDto } from './dto/create-blog-category.dto';
import { UpdateBlogCategoryDto } from './dto/update-blog-category.dto';

@Controller('blog-category')
export class BlogCategoryController {
    constructor(
        private readonly blogCategoryService: BlogCategoryService
    ) {}

    @Get()
    async getAllBlogCategories() {
        return this.blogCategoryService.getAllBlogCategories();
    }

    @Get(':id')
    async getABlogCategory(@Param('id') id: number) {
        return this.blogCategoryService.getABlogCategory(id);
    }

    @Post()
    async create(@Body() createBlogCategoryDto: CreateBlogCategoryDto) {
        return this.blogCategoryService.create(createBlogCategoryDto);
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() updateBlogCategoryDto: UpdateBlogCategoryDto) {
        return this.blogCategoryService.updateABlogCategory(+id, updateBlogCategoryDto);
    }

    @Delete(':id')
    async deleteABlogCategory(@Param('id') id: string) {
        return this.blogCategoryService.deleteABlogCategory(+id)
    }
}
