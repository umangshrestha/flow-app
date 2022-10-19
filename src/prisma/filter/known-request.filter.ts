import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  UnprocessableEntityException,
} from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';


@Catch(PrismaClientKnownRequestError)
export class PrismaClientKnownRequestFilter implements ExceptionFilter {
  public catch(exception: PrismaClientKnownRequestError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    throw new UnprocessableEntityException(exception.meta.cause || exception.code);
  }
}

