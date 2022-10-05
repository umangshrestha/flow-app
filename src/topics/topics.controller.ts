import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ValidationPipe, UseInterceptors } from '@nestjs/common';
import { TopicsService as Service } from './topics.service';
import { CreateTopicDto as CreateDto } from './dto/create-topic.dto';
import { UpdateTopicDto as UpdateDto } from './dto/update-topic.dto';
import { TopicEntity as Entity } from './entities/topic.entity';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { QueryTopicDto as QueryDto} from "./dto/query-topic.dto";
import { TransformFindManyResponse, TransformFindResponse } from './topics.interceptor';
import {TopicEntityWithCount as EntityWithCount } from './entities/transform-topic.entity';

@Controller('topics')
@ApiTags('topics')
export class TopicsController {
  constructor(private readonly service: Service) { }

  @Post()
  @ApiCreatedResponse({ type: Entity })
  create(@Body() createDto: CreateDto) {
    return this.service.create(createDto);
  }

  @Get()
  @UseInterceptors(TransformFindManyResponse)
  @ApiOkResponse({ type: EntityWithCount, isArray: true })
  async findAll( @Query(new ValidationPipe({
    transform: true,
    transformOptions: { enableImplicitConversion: true },
    forbidNonWhitelisted: true
  })) query: QueryDto) {
    return await this.service.findAll(query);
  }

  @Get(':id')
  @UseInterceptors(TransformFindResponse)
  @ApiCreatedResponse({ type: EntityWithCount })
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: Entity })
  update(@Param('id') id: string, @Body() updateDto: UpdateDto) {
    return this.service.update(+id, updateDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: Entity })
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}