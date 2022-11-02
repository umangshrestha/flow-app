import { ValidationPipe } from "@nestjs/common";

export const TypeValidator = new ValidationPipe({
    transform: true,
    transformOptions: { enableImplicitConversion: true },
    forbidNonWhitelisted: true
})