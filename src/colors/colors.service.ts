import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Color } from './entities/color.entity';
import { Repository } from 'typeorm';
import { CreateColorDto } from './dto/create-color.dto';
import { UpdateColorDto } from './dto/update-color.dto';
import { ColorNotFound } from 'src/exceptions/color-notfound.exception';

@Injectable()
export class ColorsService {
  constructor(
    @InjectRepository(Color)
    private readonly colorRepository: Repository<Color>,
  ) {}

  async create(createColorDto: CreateColorDto) {
    const color = this.colorRepository.create(createColorDto);
    return await this.colorRepository.save(color);
  }

  async updateAColor(id: number, updateColorDto: UpdateColorDto) {
    const color = await this.getAColor(id);
    if (!color) {
      throw new ColorNotFound();
    }
    return await this.colorRepository.update(color, updateColorDto);
  }

  async getAllColors() {
    return await this.colorRepository.find();
  }

  async getAColor(id: number) {
    try {
      return await this.colorRepository.findOne({ where: { id } });      
    } catch (error) {
      throw new ColorNotFound();
    }
  }

  async deleteAColor(id: number) {
    const color = await this.getAColor(id);
    if (!color) {
      throw new ColorNotFound();
    }
    return await this.colorRepository.remove(color);
  }
}
