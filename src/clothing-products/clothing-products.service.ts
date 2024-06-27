import { HttpService } from '@nestjs/axios';
import { BadRequestException, Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ClothingProductsService {
  constructor(private readonly httpService: HttpService) {}

  // Get All Products
  async getAllProducts() {
    try {
      const response = await firstValueFrom(
        this.httpService.get('https://fakestoreapi.com/products'),
      );
      return response.data;
    } catch (error) {
      throw new BadRequestException();
    }
  }

  // Get single Product
  async getAProduct(productId: string) {
    try {
      const response = await firstValueFrom(
        this.httpService.get(`https://fakestoreapi.com/products/${productId}`),
      );
      return response.data;
    } catch (error) {
      throw new BadRequestException();
    }
  }

  // Create a New Product
  async createAProduct(createProductDto: CreateProductDto) {
    // console.log(createProductDto);

    try {
      const response = await firstValueFrom(
        this.httpService.post('https://fakestoreapi.com/products', createProductDto),
      );
      return response.data;
    } catch (error) {
      throw new BadRequestException();
    }
  }

  // Update a Product
  async UpdateAProduct(productId: string, updateProductDto: UpdateProductDto) {
    // console.log(id);
    // console.log(updateProductDto);

    try {
      const response = await firstValueFrom(
        this.httpService.put(`https://fakestoreapi.com/products/${productId}`, updateProductDto),
      );
      return response.data;
    } catch (error) {
      throw new BadRequestException();
    }
  }
}
