import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BlogCategory } from './entities/blog-category.entity';
import { Repository } from 'typeorm';
import { CreateBlogCategoryDto } from './dto/create-blog-category.dto';
import { UpdateBlogCategoryDto } from './dto/update-blog-category.dto';

@Injectable()
export class BlogCategoryService {
    constructor(
        @InjectRepository(BlogCategory)
        private readonly blogCategoryRepository: Repository<BlogCategory>
    ) {}

    async create(createBlogCategoryDto: CreateBlogCategoryDto) {
        const blogCategory = this.blogCategoryRepository.create(createBlogCategoryDto);
        return await this.blogCategoryRepository.save(blogCategory);      
    }

    async updateABlogCategory(id: number, updateBlogCategoryDto: UpdateBlogCategoryDto) {
        const blogCategory = await this.getABlogCategory(id);
        if (!blogCategory) {
          throw new NotFoundException();
        }
        Object.assign(blogCategory, updateBlogCategoryDto);        
        return await this.blogCategoryRepository.save(blogCategory);
    }

    async getAllBlogCategories() {
        return await this.blogCategoryRepository.find()
    }

    async getABlogCategory(id: number) {
        return await this.blogCategoryRepository.findOne({where: {id}})
    }

    async deleteABlogCategory(id: number) {
        const blogCategory = await this.getABlogCategory(id);
        if (!blogCategory) {
          throw new NotFoundException();
        }    
        return await this.blogCategoryRepository.remove(blogCategory);
    }
}
