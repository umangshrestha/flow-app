import {PassportStrategy} from '@nestjs/passport';
import {ExtractJwt, Strategy} from 'passport-jwt';
import {AuthService} from "./auth.service";
import { Injectable} from "@nestjs/common";
import { LoginUserDto } from 'src/users/dto/login-user.dto';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
    constructor(private readonly authService: AuthService) {
        super({
            jwtFromRequest:   
            ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: true,
            secretOrKey: process.env.SECRET_KEY,
        });
    }

    async validate(payload: LoginUserDto){
        return  payload;
    }
}

