import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseInterceptors } from '@nestjs/common';
import { ApiBadGatewayResponse, ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Flatten } from 'src/prisma/interceptors/flatten.interceptor';
import { QueryDto } from 'src/shared/dto/query.dto';
import { ValidationErrorEntity } from 'src/shared/entity/validation-error.entity';
import { DepartmentsService as Service } from './departments.service';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { DepartmentEntity as Entity } from './entities/department.entity';

@Controller('departments')
@ApiTags('departments')
@UseInterceptors(new Flatten({ key: "faculty" }))
export class DepartmentsController {
  constructor(private readonly service: Service) { }

  @Post()
  @ApiOperation({ summary: 'If faculty doesn\'t exist create new one before connecting' })
  @ApiCreatedResponse({ type: Entity })
  create(@Body() createDepartmentDto: CreateDepartmentDto) {
    return this.service.create(createDepartmentDto);
  }

  @Get()
  @ApiBadGatewayResponse({ type: ValidationErrorEntity })
  @ApiOkResponse({ type: Entity, isArray: true })
  findAll(@Query() query: QueryDto) {
    return this.service.findAll(query);
  }

  @Get(':id')
  @ApiOkResponse({ type: Entity })
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: Entity })
  update(@Param('id') id: string, @Body() updateDepartmentDto: UpdateDepartmentDto) {
    return this.service.update(+id, updateDepartmentDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: Entity })
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
