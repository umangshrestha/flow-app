import { ExceptionFilter, ArgumentsHost } from '@nestjs/common';
import { NotFoundError } from '@prisma/client/runtime';
export declare class PrismaNotFoundExceptionFilter implements ExceptionFilter {
    catch(_: NotFoundError, host: ArgumentsHost): void;
}
