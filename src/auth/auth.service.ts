import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsersService } from "../users/users.service";
import { JwtService } from "@nestjs/jwt";
import { LoginUserDto } from 'src/users/dto/login-user.dto';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Injectable()
export class AuthService {

    constructor(
        private readonly jwtService: JwtService,
        private readonly usersService: UsersService) { }


    async login(LoginUserDto: LoginUserDto) {
        const user = await this.usersService.login(LoginUserDto);
        const token = await this.createToken(user);
        this.usersService.updateRefreshToken(user.id, token.refreshToken);
        return token;
    }

    async createToken(user) {
        return {
            accessToken: this.jwtService.sign(user),
            refreshToken: this.jwtService.sign(user, {
                secret: process.env.REFRESH_SECRET,
                expiresIn: "7d"
            }),
        }
    }

    logout(id: number) {
        return this.usersService.updateRefreshToken(id, null);
    }

    async refreshToken(id: number, refreshToken: string) {
        const { refreshToken: hashedToken,...user} = await this.usersService.findOne(id, true);
        await this.usersService.validateHash(refreshToken, hashedToken);
        const token = await this.createToken(user);
        await this.usersService.updateRefreshToken(id, token.refreshToken);
        return token;
    }

    async create(createUserDto: CreateUserDto) {
        try {
            return {
                success: true,
                message: "ACCOUNT_CREATION_SUCCESS",
                data: await this.usersService.create(createUserDto)
            }
        } catch (exception) {
            throw new HttpException({
                statusCode: HttpStatus.BAD_REQUEST,
                success: false,
                message: "ACCOUNT_CREATION_FAILED",
                error: exception.meta.cause || exception.code,
            }, HttpStatus.BAD_REQUEST)
        }
    }

}
