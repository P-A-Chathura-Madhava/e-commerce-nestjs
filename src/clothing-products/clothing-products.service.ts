import { HttpService } from '@nestjs/axios';
import { BadRequestException, Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ClothingProductsService {
  constructor(private readonly httpService: HttpService) {}

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
}
