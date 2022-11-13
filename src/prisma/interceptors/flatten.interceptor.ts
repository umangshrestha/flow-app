import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { map, Observable } from "rxjs";


@Injectable()
export class Flatten implements NestInterceptor {
    constructor(private config: { key: string }) { }

    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        return next.handle().pipe(
            map((x: Object[] | Object) => Array.isArray(x) ?
                x.map((val: Object) => this.tansformData(val)) :
                this.tansformData(x)));
    }

    tansformData(data: Object) {
        console.log(data)
        const { key } = this.config;
        if (data[key] && data[key][key]) {
            const {id, ...rest} = data[key];
            delete data[key];
            data = {...rest, ...data};
        }
        return data
    }

}