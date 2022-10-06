import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { UsersService } from "../users/users.service";
import { JwtService } from "@nestjs/jwt";
import { LoginUserDto } from 'src/users/dto/login-user.dto';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { JwtPayload } from "./auth.strategy";
import { ReturnUserDto } from 'src/users/dto/return-user.dto';

@Injectable()
export class AuthService {
    constructor(private readonly primsa: PrismaService,
        private readonly jwtService: JwtService,
        private readonly usersService: UsersService) { }

    private _createToken({ email }: ReturnUserDto) {
        const user: JwtPayload = { email };
        const Authorization = this.jwtService.sign(user);
        return {
            expiresIn: process.env.EXPIRES_IN,
            Authorization
        }
    }

    async findOne(LoginUserDto: LoginUserDto) {
        const user = await this.usersService.login(LoginUserDto);
        const token = this._createToken(user);
        return {
            ...token,
            data: user
        }
    }

    async create(createUserDto: CreateUserDto) {
        try {
            return {
                success: true,
                message: "ACCOUNT_CREATION_SUCCESS",
                data: await this.usersService.create(createUserDto)
            }
        } catch (err) {
            return {
                success: false,
                message: err,
            }
        }
    }
}
