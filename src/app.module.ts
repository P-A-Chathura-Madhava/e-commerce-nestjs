import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClothingProductsModule } from './clothing-products/clothing-products.module';
import { OurProductsModule } from './our-products/our-products.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { BrandsModule } from './brands/brands.module';
import { ColorsModule } from './colors/colors.module';
import { BlogCategoryModule } from './blog-category/blog-category.module';
import { CouponsModule } from './coupons/coupons.module';
import { EnquiriesModule } from './enquiries/enquiries.module';
import { ProductCategoryModule } from './product-category/product-category.module';
import { BlogsModule } from './blogs/blogs.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { RequestIdMiddleware } from './middlewares/request-id.middleware';
import { TenantDatasourceMiddleware } from './middlewares/tenant-datasource.middleware';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: +configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: [join(process.cwd(), 'dist/**/*.entity.js')],
        synchronize: true,
      }),
    }),
    ClothingProductsModule,
    OurProductsModule,
    BrandsModule,
    ColorsModule,
    BlogCategoryModule,
    CouponsModule,
    EnquiriesModule,
    ProductCategoryModule,
    BlogsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RequestIdMiddleware).forRoutes('*');
    consumer.apply(TenantDatasourceMiddleware).forRoutes('*');
  }
}
