import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ValidationPipe, UseInterceptors, UseFilters } from '@nestjs/common';
import { TopicsService as Service } from './topics.service';
import { CreateTopicDto as CreateDto } from './dto/create-topic.dto';
import { UpdateTopicDto as UpdateDto } from './dto/update-topic.dto';
import { TopicEntity as Entity } from './entities/topic.entity';
import { ApiBadGatewayResponse, ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { QueryTopicDto as QueryDto} from "./dto/query-topic.dto";
import { TransformFindManyResponse, TransformFindResponse } from './topics.interceptor';
import {TopicEntityWithCount as EntityWithCount } from './entities/transform-topic.entity';
import { PrismaNotFoundExceptionFilter } from 'src/errors/filter/not-found.filter';
import { ErrorEntity } from 'src/errors/entries/error.entity';
import { ValidationErrorEntity } from 'src/errors/entries/validation-error.entity';

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
  @ApiBadGatewayResponse({type: ValidationErrorEntity})
  async findAll( @Query(new ValidationPipe({
    transform: true,
    transformOptions: { enableImplicitConversion: true },
    forbidNonWhitelisted: true
  })) query: QueryDto) {
    return await this.service.findAll(query);
  }

  @Get(':id')
  @UseInterceptors(TransformFindResponse)
  @UseFilters(new PrismaNotFoundExceptionFilter)
  @ApiCreatedResponse({ type: EntityWithCount })
  @ApiNotFoundResponse({type:ErrorEntity })
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