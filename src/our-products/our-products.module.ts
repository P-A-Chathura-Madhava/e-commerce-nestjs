import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { OurProductsController } from './our-products.controller';
import { OurProductsService } from './our-products.service';

@Module({
    imports: [TypeOrmModule.forFeature([Product])],
    controllers: [OurProductsController],
    providers: [OurProductsService],
})
export class OurProductsModule {}
