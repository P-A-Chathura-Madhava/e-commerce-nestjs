import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Brand } from './entities/brand.entity';
import { Repository } from 'typeorm';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';

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

    async updateABrand(id: number, updateBrandDto: UpdateBrandDto) {
        const brand = await this.getABrand(id);
        if (!brand) {
          throw new NotFoundException();
        }
        Object.assign(brand, updateBrandDto);        
        return await this.brandRepository.save(brand);
    }

    async getAllBrands() {
        return await this.brandRepository.find()
    }

    async getABrand(id: number) {
        return await this.brandRepository.findOne({where: {id}})
    }

    async deleteABrand(id: number) {
        const brand = await this.getABrand(id);
        if (!brand) {
          throw new NotFoundException();
        }    
        return await this.brandRepository.remove(brand);
    }
}
