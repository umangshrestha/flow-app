import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, ClassSerializerInterceptor, UseGuards, Query, ValidationPipe } from '@nestjs/common';
import { ApiCookieAuth, ApiOkResponse, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { AccessTokenGuard } from 'src/auth/guard/access-token.gaurd';
import { UserEntity as Entity } from '../entity/user.entity';
import { UsersService as Service } from '../users.service';
import { isRole } from 'src/auth/role/role.decorator';
import { Role } from '@prisma/client';
import { RoleGaurd } from 'src/auth/role/role.gaurd';
import { ForbiddenErrorEntity } from 'src/auth/entity/forbidden-error.entity';
import { UnauthorizedErrorEntity } from 'src/auth/entity/unauthorized-error.entity';
import { QueryDto } from 'src/shared/dto/query.dto';


@Controller('admin')
@ApiTags('admin')
@isRole(Role.ADMIN)
@ApiCookieAuth()
@UseGuards(AccessTokenGuard, RoleGaurd)
@UseInterceptors(ClassSerializerInterceptor)
@ApiUnauthorizedResponse({ type: ForbiddenErrorEntity })
@ApiUnauthorizedResponse({ type: UnauthorizedErrorEntity })
export class AdminController {
  constructor(private readonly service: Service) { }

  @ApiOkResponse({ type: Entity, isArray: true })
  @Get("get-all-users/")
  findAll(@Query() query: QueryDto) {
    return this.service.findAll(query);
  }

  @ApiOkResponse({ type: Entity })
  @Get('get-user/:id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id, false);
  }

  @ApiOkResponse({ type: Entity })
  @Delete('delete-user/:id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
