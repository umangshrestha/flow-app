import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpStatus,
} from '@nestjs/common';
import { PrismaClientInitializationError } from '@prisma/client/runtime';
import { Response } from 'express';

@Catch(PrismaClientInitializationError)
export class PrismaClientInitializationFilter implements ExceptionFilter {
    public catch(exception: PrismaClientInitializationError, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        response.status(HttpStatus.UNPROCESSABLE_ENTITY).json({ error: exception.errorCode });
    }
}
