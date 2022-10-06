import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { Observable } from "rxjs";
export declare class TransformFindManyResponse implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any>;
}
export declare class TransformFindResponse implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any>;
}
