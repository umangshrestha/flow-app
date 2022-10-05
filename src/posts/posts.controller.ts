import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, Query, UseInterceptors } from '@nestjs/common';
import { PostsService as Service } from './posts.service';
import { CreatePostDto as CreateDto } from './dto/connect-post.dto';
import { UpdatePostDto as UpdateDto } from './dto/update-post.dto';
import {PostResponseEntity  as ResponseEntity } from './entities/post.entity';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { QueryPostDto as QueryDto} from './dto/query-post.dto';
import { TransformFindManyResponse, TransformFindResponse } from './posts.interceptor';
import { PostGetEntity } from './entities/transform-post.entity';

@Controller('posts')
@ApiTags('posts')
export class PostsController {
  constructor(private readonly service: Service) { }

  @Post()
  @ApiCreatedResponse({ type: ResponseEntity })
  create(@Body() createDto: CreateDto) {
    return this.service.create(createDto);
  }

  @Get()
  @UseInterceptors(TransformFindManyResponse)
  @ApiOkResponse({ type: PostGetEntity, isArray: true })
  async findAll( @Query(new ValidationPipe({
    transform: true,
    transformOptions: { enableImplicitConversion: true },
    forbidNonWhitelisted: true
  })) query: QueryDto) {
    return this.service.findAll(query)
  }

  @Get(':id')
  @UseInterceptors(TransformFindResponse)
  @ApiCreatedResponse({ type: PostGetEntity })
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: ResponseEntity })
  update(@Param('id') id: string, @Body() updateDto: UpdateDto) {
    return this.service.update(+id, updateDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: ResponseEntity })
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}