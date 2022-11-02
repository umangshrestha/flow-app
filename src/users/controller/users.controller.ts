import {
  Controller, Get, ClassSerializerInterceptor,
  Body, UseGuards, UseInterceptors, Put, Delete
} from '@nestjs/common';
import { UsersService as Service} from '../users.service';
import { UpdateUserDto } from '../dto/update-user.dto';
import { ApiBadRequestResponse, ApiBearerAuth, ApiOkResponse, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { AccessTokenGuard } from 'src/auth/guard/access-token.gaurd';
import { AuthUser } from '../../auth/decorator/get-user.decorator';
import { UnauthorizedErrorEntity } from '../../auth/entity/unauthorized-error.entity';
import { UserEntity as Entity } from '../entity/user.entity';
import { TypeValidator } from 'src/shared/validator';
import { ValidationErrorEntity } from 'src/shared/entity/validation-error.entity';

@Controller('users')
@ApiTags('users')
@ApiBearerAuth('accessToken')
@UseGuards(AccessTokenGuard)
@UseInterceptors(ClassSerializerInterceptor)
@ApiUnauthorizedResponse({type: UnauthorizedErrorEntity})
export class UsersController {
  constructor(private readonly service: Service) { }

  @Get('personal-details')
  @ApiOkResponse({type: Entity})
  findOne(@AuthUser() id: number) {
    return this.service.findOne(id, false);
  }

  @Put('update/details')
  @ApiOkResponse({type: Entity})
  @ApiBadRequestResponse({ type: ValidationErrorEntity })
  async update(@AuthUser() id: number, @Body(TypeValidator) updateUserDto: UpdateUserDto) {
    return this.service.update(id, updateUserDto);
  }

  @Delete('remove')
  @ApiOkResponse({type: Entity})
  remove(@AuthUser() id: number) {
    return this.service.remove(id);
  }
}
