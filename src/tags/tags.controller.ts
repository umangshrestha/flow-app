import { Controller, Get, Body, Patch, Param, Delete, Query, UseInterceptors } from '@nestjs/common';
import { TagsService as Service } from './tags.service';
import { UpdateTagDto as UpdateDto } from './dto/update-tag.dto';
import { TagEntity as Entity } from "./entities/tag.entity";
import { TagEntityWithTopic as EntityWithTopic } from "./entities/tag-with-topic.entity";
import { TagEntityWithFlow as EntityWithFlow } from "./entities/tag-with-flows.entity";
import { ApiBadGatewayResponse, ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { QueryLimitDto, QueryTimeDto as QueryDto } from 'src/shared/dto/query.dto';
import { ValidationErrorEntity } from 'src/shared/entity/validation-error.entity';
import { FlattenCount } from 'src/prisma/interceptors/count.interceptors';

@Controller('tags')
@ApiTags('tags')
export class TagsController {
  constructor(private readonly service: Service) { }
  @Get()
  @ApiBadGatewayResponse({ type: ValidationErrorEntity })
  @ApiOkResponse({ type: Entity, isArray: true })
  findAll(@Query() query: QueryDto) {
    return this.service.findAll(query);
  }

  @Get(':id')
  @UseInterceptors(new FlattenCount)
  @ApiOkResponse({ type: EntityWithTopic })
  findOneTopics(@Param('id') id: number, @Query() query: QueryLimitDto) {
    return this.service.findOneTopics(id, query);
  }

  @Get(':id/flows')
  @UseInterceptors(new FlattenCount)
  @ApiOkResponse({ type: EntityWithFlow })
  findOneFlows(@Param('id') id: number, @Query() query: QueryLimitDto) {
    return this.service.findOneFlows(id, query);
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
