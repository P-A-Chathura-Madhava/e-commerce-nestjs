import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Color } from './entities/color.entity';
import { Repository } from 'typeorm';
import { CreateColorDto } from './dto/create-color.dto';
import { UpdateColorDto } from './dto/update-color.dto';

@Injectable()
export class ColorsService {
    constructor(
        @InjectRepository(Color)
        private readonly colorRepository: Repository<Color>
    ) {}

    async create(createColorDto: CreateColorDto) {
        const color = this.colorRepository.create(createColorDto);
        return await this.colorRepository.save(color);      
    }

    async updateAColor(id: number, updateColorDto: UpdateColorDto) {
        const color = await this.getAColor(id);
        if (!color) {
          throw new NotFoundException();
        }
        Object.assign(color, updateColorDto);        
        return await this.colorRepository.save(color);
    }

    async getAllColors() {
        return await this.colorRepository.find()
    }

    async getAColor(id: number) {
        return await this.colorRepository.findOne({where: {id}})
    }

    async deleteAColor(id: number) {
        const color = await this.getAColor(id);
        if (!color) {
          throw new NotFoundException();
        }    
        return await this.colorRepository.remove(color);
    }
}
