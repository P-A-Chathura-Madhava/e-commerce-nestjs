import { HttpService } from '@nestjs/axios';
import { BadRequestException, Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class ClothingProductsService {
    constructor(private readonly httpService: HttpService) {}

    async getAllProducts() {
        try {
            const response = await firstValueFrom(
                this.httpService.get('https://fakestoreapi.com/products')
            )
            return response.data;            
        } catch (error) {
            throw new BadRequestException();
        }
    }
}
