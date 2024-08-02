import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Brand } from './entities/brand.entity';

@ApiTags("Brands")
@Controller('brands')
export class BrandsController {
    constructor(
        private readonly brandsService: BrandsService
    ) {}

    @ApiOkResponse()
    @Get()
    async getAllBrands() {
        return this.brandsService.getAllBrands();
    }

    @ApiOkResponse({
        type: Brand
    })
    @ApiBadRequestResponse({description: "Brand Not Found"})
    @Get(':id')
    async getABrand(@Param('id') id: number) {
        return this.brandsService.getABrand(id);
    }

    @ApiCreatedResponse({
        description: "Brand Created",
        type: Brand
    })
    @ApiBadRequestResponse({description: "Failed to create the Brand"})
    @Post()
    async create(@Body() createBrandDto: CreateBrandDto) {
        return this.brandsService.create(createBrandDto);
    }

    @ApiOkResponse({
        description: "Brand Updated",
        type: Brand
    })
    @ApiBadRequestResponse({description: "Failed to update the Brand"})
    @Patch(':id')
    async update(@Param('id') id: string, @Body() updateBrandDto: UpdateBrandDto) {
        return this.brandsService.updateABrand(+id, updateBrandDto);
    }

    @ApiOkResponse({
        description: "Brand Deleted",
        type: Brand
    })
    @ApiBadRequestResponse({description: "Failed to delete the Brand"})
    @Delete(':id')
    async deleteABrand(@Param('id') id: string) {
        return this.brandsService.deleteABrand(+id)
    }
}
