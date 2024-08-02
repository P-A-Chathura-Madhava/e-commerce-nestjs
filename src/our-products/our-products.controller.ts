import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { OurProductsService } from './our-products.service';
import { CreateOurProductDto } from './dto/create-our-product.dto';
import { UpdateOurProductDto } from './dto/update-our-product.dto';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Product } from './entities/product.entity';

@ApiTags('Our Products')
@Controller('our-products')
export class OurProductsController {
  constructor(private readonly ourProductsService: OurProductsService) {}

  @ApiOkResponse()
  @Get()
  async getAllProducts() {
    return this.ourProductsService.getAllProducts();
  }

  @ApiOkResponse({
    type: Product,
  })
  @ApiBadRequestResponse({ description: 'Product Not Found' })
  @Get(':id')
  async getAProduct(@Param('id') id: number) {
    return this.ourProductsService.getAProduct(id);
  }

  @ApiCreatedResponse({
    description: 'Product Created',
    type: Product,
  })
  @ApiBadRequestResponse({ description: 'Failed to create the product' })
  @Post()
  async create(@Body() createOurProductDto: CreateOurProductDto) {
    return this.ourProductsService.create(createOurProductDto);
  }

  @ApiOkResponse({
    description: 'Product Updated',
    type: Product,
  })
  @ApiBadRequestResponse({ description: 'Failed to update the product' })
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateOurProductDto: UpdateOurProductDto,
  ) {
    return this.ourProductsService.updateAProduct(+id, updateOurProductDto);
  }

  @ApiOkResponse({
    description: 'Product Deleted',
    type: Product,
  })
  @ApiBadRequestResponse({ description: 'Failed to delete the product' })
  @Delete(':id')
  async deleteAProduct(@Param('id') id: string) {
    return this.ourProductsService.deleteAProduct(+id);
  }
}
