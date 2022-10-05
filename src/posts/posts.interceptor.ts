import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PostEntity } from './entities/post.entity';
import { PostGetEntity } from './entities/transform-post.entity';

const tansformPostData = (data: PostEntity): PostGetEntity =>
({
    ...data,
    ...data.faculty,
    topic: data.topic.map(x => x.topic)
})

@Injectable()
export class TransformFindManyResponse implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        return next.handle().pipe(
            map(posts => posts.map((x: PostEntity) => tansformPostData(x)))
        );
    }
}


@Injectable()
export class TransformFindResponse implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        return next.handle().pipe(
            map((x: PostEntity) => tansformPostData(x))
        );
    }
}
