import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
// import { APP_GUARD } from '@nestjs/core';
// import { RolesGuard } from './auth/roles.guard';
import { JWTModule } from './auth/resolve/JWT.module';
import { ClothingProductsModule } from './clothing-products/clothing-products.module';

@Module({
  imports: [AuthModule, UsersModule, JWTModule, ClothingProductsModule],
  controllers: [AppController],
  providers: 
  [
    AppService,
    // {
    //   provide: APP_GUARD,
    //   useClass: RolesGuard,
    // },
  ],
})
export class AppModule {}
