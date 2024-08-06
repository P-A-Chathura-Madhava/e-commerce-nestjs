import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { CreateOurProductDto } from './dto/create-our-product.dto';
import { UpdateOurProductDto } from './dto/update-our-product.dto';
import { ProductNotFound } from 'src/exceptions/product-notfound.exception';

@Injectable()
export class OurProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async create(createOurProductDto: CreateOurProductDto) {
    // console.log(createOurProductDto);
    const product = this.productRepository.create(createOurProductDto);
    return await this.productRepository.save(product);
  }

  async getAllProducts() {
    return await this.productRepository.find();
  }

  async getAProduct(id: number) {
    try {
      return await this.productRepository.findOne({ where: { id } });      
    } catch (error) {
      throw new ProductNotFound();
    }
  }

  async updateAProduct(id: number, updateOurProductDto: UpdateOurProductDto) {
    const product = await this.getAProduct(id);
    if (!product) {
      throw new ProductNotFound();
    }
    return await this.productRepository.update(product, updateOurProductDto);
  }

  async deleteAProduct(id: number) {
    const product = await this.getAProduct(id);
    if (!product) {
      throw new ProductNotFound();
    }
    return await this.productRepository.remove(product);
  }
}
