import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Blog } from './entities/blog.entity';

@ApiTags('Blogs')
@Controller('blogs')
export class BlogsController {
  constructor(private readonly blogsService: BlogsService) {}

  @ApiOkResponse()
  @Get()
  async getAllBlogs() {
    return this.blogsService.getAllBlogs();
  }

  @ApiOkResponse({
    type: Blog,
  })
  @ApiBadRequestResponse({ description: 'Failed to load the Blog' })
  @Get(':id')
  async getABlog(@Param('id') id: number) {
    return this.blogsService.getABlog(id);
  }

  @ApiCreatedResponse({
    description: 'Blog Created',
    type: Blog,
  })
  @ApiBadRequestResponse({ description: 'Failed to create the Blog' })
  @Post()
  async create(@Body() createBlogDto: CreateBlogDto) {
    return this.blogsService.create(createBlogDto);
  }

  @ApiOkResponse({
    description: 'Blog Updated',
    type: Blog,
  })
  @ApiBadRequestResponse({
    description: 'Failed to update the blog',
    type: Blog,
  })
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateBlogDto: UpdateBlogDto) {
    return this.blogsService.updateABlog(+id, updateBlogDto);
  }

  @ApiOkResponse({
    description: 'Blog Deleted',
    type: Blog,
  })
  @ApiBadRequestResponse({ description: 'Failed to delete the Blog' })
  @Delete(':id')
  async deleteABlog(@Param('id') id: string) {
    return this.blogsService.deleteABlog(+id);
  }
}
