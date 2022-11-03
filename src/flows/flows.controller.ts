import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { FlowsService as Service } from './flows.service';
import { CreateFlowDto as CreateDto } from './dto/create-flow.dto';
import { UpdateFlowDto as UpdateDto } from './dto/update-flow.dto';
import { ApiBadGatewayResponse, ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ValidationErrorEntity } from 'src/shared/entity/validation-error.entity';
import { QueryTimeDto as QueryDto } from 'src/shared/dto/query.dto';
import { FlowEntity as Entity } from './entities/flow.entity';

@Controller('flows')
@ApiTags('flows')
export class FlowsController {

  constructor(private readonly service: Service) { }

  @Post()
  @ApiCreatedResponse({ type: Entity })
  create(@Body() createDto: CreateDto) {
    return this.service.create(createDto);
  }

  @Get()
  @ApiBadGatewayResponse({ type: ValidationErrorEntity })
  @ApiOkResponse({ type: Entity, isArray: true })
  findAll(@Query() query: QueryDto) {
    return this.service.findAll(query);
  }

  @Get(':id')
  @ApiOkResponse({ type: Entity })
  findOne(@Param('id') id: number) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: Entity })
  update(@Param('id') id: number, @Body() updateDto: UpdateDto) {
    return this.service.update(id, updateDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: Entity })
  remove(@Param('id') id: number) {
    return this.service.remove(id);
  }
 
}
