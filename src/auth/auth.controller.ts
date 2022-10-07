import {
    Body,
    Controller,
    HttpException,
    HttpStatus,
    Post,
} from '@nestjs/common';
import { AuthService } from "./auth.service";
import { LoginUserDto } from 'src/users/dto/login-user.dto';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { RegiserUserDto } from './entity/registration-auth.entity';



@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('register')
    @ApiOkResponse({ type: RegiserUserDto })
    async register(@Body() createUserDto: CreateUserDto) {
        const result = await
            this.authService.create(createUserDto);
        if (!result.success) {
            throw new HttpException(result.message,
                HttpStatus.BAD_REQUEST);
        }
        return result;
    }

    @Post('login')
    login(@Body() loginUserDto: LoginUserDto) {
        return this.authService.login(loginUserDto);
    }

}