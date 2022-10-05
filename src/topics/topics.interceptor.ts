import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { map, Observable } from "rxjs";
import { TopicEntityWithCount } from "./entities/transform-topic.entity";


const tansformPostData = (data): TopicEntityWithCount => {
    data._count = data._count.query;
    return data
}

@Injectable()
export class TransformFindManyResponse implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        return next.handle().pipe(
            map(posts => posts.map(x => tansformPostData(x)))
        );
    }
}


@Injectable()
export class TransformFindResponse implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        return next.handle().pipe(
            map(x => tansformPostData(x))
        );
    }
}
