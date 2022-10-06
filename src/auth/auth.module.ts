import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { JwtStrategy } from "./auth.strategy";
import { AuthController } from './auth.controller';
import { UsersService } from 'src/users/users.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [AuthService, UsersService, JwtStrategy, PrismaService],
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
      secret: process.env.SECRET_KEY,
      signOptions: {
        expiresIn: process.env.EXPIRES_IN
      }
    })
  ]
})
export class AuthModule { }
