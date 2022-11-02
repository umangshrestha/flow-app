import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { AccessTokenStrategy } from "./strategy/access-token.strategy";
import { RefreshTokenStrategy } from './strategy/refresh-token.strategy';
import { AuthController } from './auth.controller';
import { UsersService } from 'src/users/users.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [AuthService, UsersService, AccessTokenStrategy, RefreshTokenStrategy, PrismaService],
  controllers: [AuthController],
  exports: [
    PassportModule,
    JwtModule,
  ],
  imports: [
    UsersModule,
    PassportModule.register({
      defaultStratefy: "jwt",
      property: "user",
      session: true
    }),
    JwtModule.register({
      secret: process.env.ACCESS_SECRET,
      signOptions: {
        expiresIn: process.env.EXPIRES_IN || '1d'
      }
    })
  ]
})
export class AuthModule { }
