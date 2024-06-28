import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { CreateOurProductDto } from './dto/create-our-product.dto';
import { UpdateOurProductDto } from './dto/update-our-product.dto';

@Injectable()
export class OurProductsService {
    constructor(
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>
    ) {}

    async create(createOurProductDto: CreateOurProductDto) {
        // console.log(createOurProductDto);
        const product = this.productRepository.create(createOurProductDto);
        return await this.productRepository.save(product);      
    }

    async getAllProducts() {
        return await this.productRepository.find()
    }

    async getAProduct(id: number) {
        return await this.productRepository.findOne({where: {id}})
    }

    async updateAProduct(id: number, updateOurProductDto: UpdateOurProductDto) {
        const product = await this.getAProduct(id);
        if (!product) {
          throw new NotFoundException();
        }
        Object.assign(product, updateOurProductDto);        
        return await this.productRepository.save(product);
    }

    async deleteAProduct(id: number) {
        const product = await this.getAProduct(id);
        if (!product) {
          throw new NotFoundException();
        }    
        return await this.productRepository.remove(product);
    }
}
