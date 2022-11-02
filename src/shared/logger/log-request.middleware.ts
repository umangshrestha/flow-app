import { Inject, Injectable, NestMiddleware, Logger } from "@nestjs/common";
import { Request, Response } from "express";


@Injectable()
export class LogRequestMiddleWare implements NestMiddleware {
    private logger = new Logger('HTTP');
    
    use(req: Request, res: Response, next: CallableFunction) {
        this.logger.log(`${req.method} ${req.baseUrl}`);
        Object.keys(req.query).length && this.logger.log(`query ${req.params}`);
        Object.keys(req.body).length && this.logger.log(`body ${JSON.stringify(req.body)}`);
        next();

        let send = res.send;
        res.send = (body) =>{
            this.logger.log(`resp ${res.statusCode} ${body}`);
            res.send = send;    
            return res.send(body);
        }
    }
} 