import { ExceptionFilter, ArgumentsHost } from '@nestjs/common';
import { PrismaClientInitializationError } from '@prisma/client/runtime';
export declare class PrismaClientInitializationFilter implements ExceptionFilter {
    catch(exception: PrismaClientInitializationError, host: ArgumentsHost): void;
}
