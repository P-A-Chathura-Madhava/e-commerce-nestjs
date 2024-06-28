import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Brand } from './entities/product.entity';
import { Repository } from 'typeorm';
import { CreateBrandDto } from './dto/create-brand.dto';

@Injectable()
export class BrandsService {
    constructor(
        @InjectRepository(Brand)
        private readonly brandRepository: Repository<Brand>
    ) {}

    async create(createBrandDto: CreateBrandDto) {
        // console.log(createBrandDto);
        const brand = this.brandRepository.create(createBrandDto);
        return await this.brandRepository.save(brand);      
    }
}
