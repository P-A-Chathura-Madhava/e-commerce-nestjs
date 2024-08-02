import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ClothingProductsService } from './clothing-products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags("Clothing Products")
@Controller('clothing-products')
export class ClothingProductsController {
    constructor(private readonly clothingService: ClothingProductsService) {}

    @ApiOkResponse()
    @Get()
    public async getAllProducts() {
        return await this.clothingService.getAllProducts();
    }

    @ApiOkResponse({
        type: CreateProductDto
    })
    @ApiBadRequestResponse({description: "Product Not Found"})
    @Get(':id')
    public async getAProduct(@Param('id') id: string) {
        return await this.clothingService.getAProduct(id);        
    }

    @ApiCreatedResponse({
        description: "Product Created",
        type: CreateProductDto
    })
    @ApiBadRequestResponse({description: "Failed to create the Product"})
    @Post()
    public async createAProduct(@Body() createProductDto: CreateProductDto) {
        // console.log(createProductDto);
        return await this.clothingService.createAProduct(createProductDto);       
    }

    @ApiOkResponse({
        description: "Product Updated",
        type: CreateProductDto
    })
    @ApiBadRequestResponse({description: "Failed to update the Product"})
    @Patch(':id')
    public async UpdateAProduct(@Param('id') id: string ,@Body() updateProductDto: UpdateProductDto) {
        // console.log(id);
        // console.log(updateProductDto);
        return await this.clothingService.UpdateAProduct(id, updateProductDto);    
    }

    @ApiOkResponse({
        description: "Product Deleted",
        type: CreateProductDto
    })
    @ApiBadRequestResponse({description: "Failed to delete the Product"})
    @Delete(':id')
    public async DeleteAProduct(@Param('id') id: string) {
        // console.log(id);
        // console.log(updateProductDto);
        return await this.clothingService.DeleteAProduct(id);    
    }
}
