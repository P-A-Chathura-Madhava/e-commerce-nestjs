import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductCategory } from './entities/product-category.entity';
import { Repository } from 'typeorm';
import { CreateProductCategoryDto } from './dto/create-product-category.dto';
import { UpdateProductCategoryDto } from './dto/update-product-category.dto';
import { ProductCategoryNotFound } from 'src/exceptions/product-category-notfound.exception';

@Injectable()
export class ProductCategoryService {
  constructor(
    @InjectRepository(ProductCategory)
    private readonly productCategoryRepository: Repository<ProductCategory>,
  ) {}

  async create(createProductCategoryDto: CreateProductCategoryDto) {
    const productCategory = this.productCategoryRepository.create(
      createProductCategoryDto,
    );
    return await this.productCategoryRepository.save(productCategory);
  }

  async updateAProductCategory(
    id: number,
    updateProductCategoryDto: UpdateProductCategoryDto,
  ) {
    const productCategory = await this.getAProductCategory(id);
    if (!productCategory) {
      throw new ProductCategoryNotFound();
    }
    return await this.productCategoryRepository.update(
      productCategory,
      updateProductCategoryDto,
    );
  }

  async getAllProductCategories() {
    return await this.productCategoryRepository.find();
  }

  async getAProductCategory(id: number) {
    try {
      return await this.productCategoryRepository.findOne({ where: { id } });      
    } catch (error) {
      throw new ProductCategoryNotFound();
    }
  }

  async deleteAProductCategory(id: number) {
    const productCategory = await this.getAProductCategory(id);
    if (!productCategory) {
      throw new ProductCategoryNotFound();
    }
    return await this.productCategoryRepository.remove(productCategory);
  }
}
