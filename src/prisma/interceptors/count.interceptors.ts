import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { map, Observable } from "rxjs";


@Injectable()
export class FlattenCount implements NestInterceptor {

    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        return next.handle().pipe(
            map((x: Object[] | Object) => Array.isArray(x) ?
                x.map((val: Object) => this.tansformData(val)) :
                this.tansformData(x)));
    }

    tansformData(data: Object) {
        console.log(data)
        if (data["_count"]) {
            for (let [key, value] of Object.entries(data["_count"])){
                data[`${key}_count`] = value
            }
            delete data["_count"];
        }
        return data
    }

}