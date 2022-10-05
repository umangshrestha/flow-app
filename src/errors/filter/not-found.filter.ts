import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpStatus,
} from '@nestjs/common';
import { NotFoundError } from '@prisma/client/runtime';
import { Response } from 'express';

@Catch(NotFoundError)
export class PrismaNotFoundExceptionFilter implements ExceptionFilter {
    public catch(_: NotFoundError, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        response.status(HttpStatus.NOT_FOUND).json({ error: 'requested data not found' });
    }
}
