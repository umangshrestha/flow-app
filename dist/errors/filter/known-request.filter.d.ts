import { ExceptionFilter, ArgumentsHost } from '@nestjs/common';
import { NotFoundError, PrismaClientInitializationError, PrismaClientKnownRequestError } from '@prisma/client/runtime';
export declare class NotFoundExceptionFilter implements ExceptionFilter {
    catch(_: NotFoundError, host: ArgumentsHost): void;
}
export declare class PrismaClientInitializationErrorFilter implements ExceptionFilter {
    catch(exception: PrismaClientInitializationError, host: ArgumentsHost): void;
}
export declare class PrismaClientKnownRequestFilter implements ExceptionFilter {
    catch(exception: PrismaClientKnownRequestError, host: ArgumentsHost): void;
}
