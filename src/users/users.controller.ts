import {
  Controller, Get, Post, Request, ClassSerializerInterceptor,
  Body, Patch, Param, Delete, UseGuards, UseInterceptors, Put
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBearerAuth, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/auth.gaurd';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @ApiSecurity('access-key')
  @ApiBearerAuth()
  @UseInterceptors(ClassSerializerInterceptor)
  @Get('personal-details')
  findOne(@Request() req) {
    return this.usersService.findOne(req);
  }

  @UseGuards(JwtAuthGuard)
  @ApiSecurity('access-key')
  @UseInterceptors(ClassSerializerInterceptor)
  @Put('update/password')
  async update(@Request() req, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(req.id, updateUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @ApiSecurity('access-key')
  @UseInterceptors(ClassSerializerInterceptor)
  @Put('update/password')
  remove(@Request() req) {
    return this.usersService.remove(req.id);
  }
}
