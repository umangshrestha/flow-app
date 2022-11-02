import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable } from "@nestjs/common";
import { LoginUserDto } from 'src/users/dto/login-user.dto';
import { Request } from 'express';

@Injectable()
export class RefreshTokenStrategy extends PassportStrategy(Strategy, 'jwt-refresh') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([(request: Request) => {
        let data = request?.cookies["auth-cookie"];
        return data ? data.refreshToken : null;
      }]), ignoreExpiration: process.env.NODE_ENV === "development",
      secretOrKey: process.env.REFRESH_SECRET,
    });
  }

  async validate(payload: LoginUserDto) {
    return payload;
  }
}

