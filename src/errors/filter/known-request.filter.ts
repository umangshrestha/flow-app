import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpStatus,
} from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { Response } from 'express';


@Catch(PrismaClientKnownRequestError)
export class PrismaClientKnownRequestFilter implements ExceptionFilter {
  public catch(exception: PrismaClientKnownRequestError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    response.status(HttpStatus.UNPROCESSABLE_ENTITY).json({ error: exception.meta.cause || exception.code });
  }
}

