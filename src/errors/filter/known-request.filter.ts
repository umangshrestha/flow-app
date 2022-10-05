import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpStatus,
} from '@nestjs/common';
import { NotFoundError, PrismaClientInitializationError, PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { Response } from 'express';

@Catch(NotFoundError)
export class NotFoundExceptionFilter implements ExceptionFilter {
  public catch(_: NotFoundError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    response.status(HttpStatus.NOT_FOUND).json({ error: 'not found' });
  }
}

@Catch(PrismaClientInitializationError)
export class PrismaClientInitializationErrorFilter implements ExceptionFilter {
  public catch(exception: PrismaClientInitializationError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    response.status(HttpStatus.UNPROCESSABLE_ENTITY).json({ error: exception.errorCode });
  }
}



@Catch(PrismaClientKnownRequestError)
export class PrismaClientKnownRequestFilter implements ExceptionFilter {
  public catch(exception: PrismaClientKnownRequestError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    response.status(HttpStatus.UNPROCESSABLE_ENTITY).json({ error: exception.meta.cause || exception.code });
  }
}

