import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ColorsService } from './colors.service';
import { CreateColorDto } from './dto/create-color.dto';
import { UpdateColorDto } from './dto/update-color.dto';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Color } from './entities/color.entity';

@ApiTags('Colors')
@Controller('colors')
export class ColorsController {
  constructor(private readonly colorsService: ColorsService) {}

  @ApiOkResponse()
  @Get()
  async getAllColors() {
    return this.colorsService.getAllColors();
  }

  @ApiOkResponse({
    type: Color,
  })
  @ApiBadRequestResponse({ description: 'Color Not Found' })
  @Get(':id')
  async getAColor(@Param('id') id: number) {
    return this.colorsService.getAColor(id);
  }

  @ApiCreatedResponse({
    description: 'Color Created',
    type: Color,
  })
  @ApiBadRequestResponse({ description: 'Failed to create the color' })
  @Post()
  async create(@Body() createColorDto: CreateColorDto) {
    return this.colorsService.create(createColorDto);
  }

  @ApiOkResponse({
    description: 'Color Updated',
    type: Color,
  })
  @ApiBadRequestResponse({ description: 'Failed to update the color' })
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateColorDto: UpdateColorDto,
  ) {
    return this.colorsService.updateAColor(+id, updateColorDto);
  }

  @ApiOkResponse({
    description: 'Color Deleted',
    type: Color,
  })
  @ApiBadRequestResponse({ description: 'Failed to delete the Color' })
  @Delete(':id')
  async deleteAColor(@Param('id') id: string) {
    return this.colorsService.deleteAColor(+id);
  }
}
