import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import { LoggerModule } from './shared/logger/logger';
import * as cookieParser from 'cookie-parser';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { PrismaClientInitializationFilter } from './prisma/filter/intiialization.filter';
import { PrismaClientKnownRequestFilter } from './prisma/filter/known-request.filter';
import { PrismaNotFoundExceptionFilter } from './prisma/filter/not-found.filter';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: LoggerModule,
    cors:true,
  });

  app.use(cookieParser());
  // app.use(helmet());
  app.useGlobalFilters(new PrismaClientInitializationFilter);
  app.useGlobalFilters(new PrismaClientKnownRequestFilter);
  app.useGlobalFilters(new PrismaNotFoundExceptionFilter)

  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    transformOptions: { enableImplicitConversion: true },
    forbidNonWhitelisted: true
  }))
  const config = new DocumentBuilder()
    .setTitle(process.env.npm_package_name)
    .setDescription(`The API description`)
    .setVersion(process.env.npm_package_version)
    .addCookieAuth("auth-cookie", {
      description: "Cookies are set automatically. No need to add.",
      type: 'http',
      scheme: 'bearer',
      in: 'header',
    })
    .build();
  const document = SwaggerModule.createDocument(app, config,);
  SwaggerModule.setup('api', app, document,);
  await app.listen(process.env.PORT || 8080);
}
bootstrap();
