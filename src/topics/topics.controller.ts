import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { TopicsService  as Service} from './topics.service';
import { CreateTopicDto as CreateDto } from './dto/create-topic.dto';
import { UpdateTopicDto  as UpdateDto} from './dto/update-topic.dto';
import { ApiBadGatewayResponse, ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { QueryDto } from 'src/shared/dto/query.dto';
import { ValidationErrorEntity } from 'src/shared/entity/validation-error.entity';
import {TopicEntity as Entity} from './entities/topic.entity';
import {TopicEntityWithDate as EntityWithDate}  from './entities/topic-with-date.entity';
import {TopicEntityWithTag as EntityWithTag} from './entities/topic-with-tag.entity';

@Controller('topics')
@ApiTags('topics')
export class TopicsController {
  constructor(private readonly service: Service) {}

  @Post()
  @ApiCreatedResponse({ type: EntityWithDate })
  create(@Body() createInstructorDto: CreateDto) {
    return this.service.create(createInstructorDto);
  }

  @Get()
  @ApiBadGatewayResponse({ type: ValidationErrorEntity })
  @ApiOkResponse({ type: Entity, isArray: true })
  findAll(@Query() query: QueryDto) {
    return this.service.findAll(query);
  }

  @Get(':id')
  @ApiOkResponse({ type: EntityWithTag })
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
