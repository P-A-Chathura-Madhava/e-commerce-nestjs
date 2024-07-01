import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ColorsService } from './colors.service';
import { CreateColorDto } from './dto/create-color.dto';
import { UpdateColorDto } from './dto/update-color.dto';

@Controller('colors')
export class ColorsController {
    constructor(
        private readonly colorsService: ColorsService
    ) {}

    @Get()
    async getAllColors() {
        return this.colorsService.getAllColors();
    }

    @Get(':id')
    async getAColor(@Param('id') id: number) {
        return this.colorsService.getAColor(id);
    }

    @Post()
    async create(@Body() createColorDto: CreateColorDto) {
        return this.colorsService.create(createColorDto);
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() updateColorDto: UpdateColorDto) {
        return this.colorsService.updateAColor(+id, updateColorDto);
    }

    @Delete(':id')
    async deleteAColor(@Param('id') id: string) {
        return this.colorsService.deleteAColor(+id)
    }
}
