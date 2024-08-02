import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Blog } from './entities/blog.entity';
import { Repository } from 'typeorm';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';

@Injectable()
export class BlogsService {
  constructor(
    @InjectRepository(Blog)
    private readonly blogRepository: Repository<Blog>,
  ) {}

  async create(createBlogDto: CreateBlogDto) {
    const blog = this.blogRepository.create(createBlogDto);
    return await this.blogRepository.save(blog);
  }

  async updateABlog(id: number, updateBlogDto: UpdateBlogDto) {
    const blog = await this.getABlog(id);
    if (!blog) {
      throw new NotFoundException();
    }
    return await this.blogRepository.update(blog, updateBlogDto);
  }

  async getAllBlogs() {
    return await this.blogRepository.find();
  }

  async getABlog(id: number) {
    return await this.blogRepository.findOne({ where: { id } });
  }

  async deleteABlog(id: number) {
    const blog = await this.getABlog(id);
    if (!blog) {
      throw new NotFoundException();
    }
    return await this.blogRepository.remove(blog);
  }
}
