import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { CreateOurProductDto } from './dto/create-our-product.dto';

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
}
