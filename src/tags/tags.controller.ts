import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { TagsService  as Service} from './tags.service';
import { UpdateTagDto as UpdateDto } from './dto/update-tag.dto';
import { TagEntity as Entity } from "./entities/tag.entity";
import { ApiBadGatewayResponse, ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { QueryTimeDto as QueryDto } from 'src/shared/dto/query.dto';
import { ValidationErrorEntity } from 'src/shared/entity/validation-error.entity';

@Controller('tags')
@ApiTags('tags')
export class TagsController {
  constructor(private readonly service: Service) {}
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
