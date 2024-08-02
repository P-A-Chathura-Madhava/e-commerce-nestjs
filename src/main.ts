import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');

  const configService = app.get(ConfigService);

  const config = new DocumentBuilder()
    .setTitle('E-Commerce Application with Fake Store API')
    .setDescription(
      'Functions for an E-Commerce type application and also integrated with Fake Store API',
    )
    .setVersion('1.0')
    .addTag('E-Commerce')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
