import { Body, Controller, Get, HttpStatus, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AuthService } from "./auth.service";
import { LoginUserDto } from 'src/users/dto/login-user.dto';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { ApiBadRequestResponse, ApiBody, ApiCookieAuth, ApiOkResponse, ApiOperation, ApiResponse, ApiTags, ApiUnauthorizedResponse } from "@nestjs/swagger";
import { RegiserSuccessDto, RegiserFailureDto } from './entity/registration-auth.entity';
import { AuthResponseDto } from './dto/response-auth.dto';
import { UnauthorizedErrorEntity } from './entity/unauthorized-error.entity';
import { TypeValidator } from 'src/shared/validator';
import { ValidationErrorEntity } from 'src/shared/entity/validation-error.entity';
import { RefreshTokenGuard } from './guard/refresh-token.gaurd';
import { AccessTokenGuard } from './guard/access-token.gaurd';
import { AuthUser } from './decorator/get-user.decorator';
import { AuthRefreshToken } from './decorator/get-refresh-token.decorator';
import { Response } from 'express';

@ApiTags('auth')
@Controller('auth')
@ApiBadRequestResponse({ type: ValidationErrorEntity })
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('register')
    @ApiOkResponse({ type: RegiserSuccessDto })
    @ApiBadRequestResponse({ type: RegiserFailureDto })
    @ApiOperation({ summary: 'Create new user' })
    async register(@Body(TypeValidator) createUserDto: CreateUserDto) {
        return await this.authService.create(createUserDto);
    }

    @Post('login')
    @ApiOperation({ description: 'Login user' })
    @ApiResponse({ type: AuthResponseDto })
    @ApiUnauthorizedResponse({ type: UnauthorizedErrorEntity })
    @ApiOperation({ summary: 'Set a HTTP read only cookie' })
    async login(
        @Body(TypeValidator) loginUserDto: LoginUserDto,
        @Res({ passthrough: true }) res: Response) {
        const secretData = await this.authService.login(loginUserDto);
        res.cookie("auth-cookie", secretData, { httpOnly: true });
        return { message: "success", statusCode: HttpStatus.OK };
    }

    @ApiCookieAuth()
    @UseGuards(AccessTokenGuard)
    @Get('logout')
    @ApiOperation({ summary: 'Clear the HTTP Read only cookie' })
    async logout(@AuthUser() id: number,
        @Res({ passthrough: true }) res: Response) {
        await this.authService.logout(id);
        res.clearCookie("auth-cookie", { httpOnly: true, path: "/" });
        return { message: "success", statusCode: HttpStatus.OK };
    }

    @ApiCookieAuth()
    @ApiOperation({ summary: 'Use this endpoint to get new Access Token' })
    @UseGuards(RefreshTokenGuard)
    @Get('refresh')
    async refreshTokens(
        @AuthRefreshToken() refreshToken: string, @AuthUser() id: number,
        @Res({ passthrough: true }) res: Response) {
        const secretData = await this.authService.refreshToken(id, refreshToken);
        res.cookie("auth-cookie", secretData, { httpOnly: true });
        return { message: "success", statusCode: HttpStatus.OK };
    }

}