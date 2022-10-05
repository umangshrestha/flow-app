import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { PrismaClientInitializationFilter } from './errors/filter/intiialization.filter';
import { PrismaClientKnownRequestFilter } from './errors/filter/known-request.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });
  
  const config = new DocumentBuilder()
    .setTitle(process.env.npm_package_name)
    .setDescription(`The API description`)
    .setVersion(process.env.npm_package_version)
    .build();

  app.useGlobalFilters(new PrismaClientInitializationFilter)
  app.useGlobalFilters(new PrismaClientKnownRequestFilter);
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(process.env.PORT||3000);
}

bootstrap()