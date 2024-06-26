import { Module } from '@nestjs/common';
import { ClothingProductsController } from './clothing-products.controller';
import { ClothingProductsService } from './clothing-products.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [ClothingProductsController],
  providers: [ClothingProductsService]
})
export class ClothingProductsModule {}
