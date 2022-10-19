import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    UnprocessableEntityException,
} from '@nestjs/common';
import { PrismaClientInitializationError } from '@prisma/client/runtime';

@Catch(PrismaClientInitializationError)
export class PrismaClientInitializationFilter implements ExceptionFilter {
    public catch(exception: PrismaClientInitializationError, host: ArgumentsHost) {
        throw new UnprocessableEntityException(exception.errorCode);
    }
}
