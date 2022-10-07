import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { UsersService } from "../users/users.service";
import { JwtService } from "@nestjs/jwt";
import { LoginUserDto } from 'src/users/dto/login-user.dto';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Injectable()
export class AuthService {
    constructor(private readonly primsa: PrismaService,
        private readonly jwtService: JwtService,
        private readonly usersService: UsersService) { }


    async login(LoginUserDto: LoginUserDto) {
        const user = await this.usersService.login(LoginUserDto);
        return this.jwtService.sign(user);
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
