import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';

@Controller('blogs')
export class BlogsController {
    constructor(
        private readonly blogsService: BlogsService
    ) {}

    @Get()
    async getAllBlogs() {
        return this.blogsService.getAllBlogs();
    }

    @Get(':id')
    async getABlog(@Param('id') id: number) {
        return this.blogsService.getABlog(id);
    }

    @Post()
    async create(@Body() createBlogDto: CreateBlogDto) {
        return this.blogsService.create(createBlogDto);
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() updateBlogDto: UpdateBlogDto) {
        return this.blogsService.updateABlog(+id, updateBlogDto);
    }

    @Delete(':id')
    async deleteABlog(@Param('id') id: string) {
        return this.blogsService.deleteABlog(+id)
    }
}
