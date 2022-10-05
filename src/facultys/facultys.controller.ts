import { Controller, Get, Post, Body, Patch, Param, Request, Delete, ValidationPipe, Query, UseInterceptors, UseFilters } from '@nestjs/common';
import { FacultysService as Service} from './facultys.service';
import { CreateFacultyDto as CreateDto} from './dto/create-faculty.dto';
import { UpdateFacultyDto as UpdateDto } from './dto/update-faculty.dto';
import { FacultyEntity as Entity} from './entities/faculty.entity';
import { ApiBadGatewayResponse, ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { QueryFacultyDto as QueryDto} from "./dto/query-faculty.dto";
import { TransformFindManyResponse, TransformFindResponse } from './faculty.intercepter';
import {FacultyEntityWithCount as EntityWithCount } from "./entities/transform-faculty.entity";
import { PrismaNotFoundExceptionFilter } from 'src/errors/filter/not-found.filter';
import { ErrorEntity } from 'src/errors/entries/error.entity';
import { ValidationErrorEntity } from 'src/errors/entries/validation-error.entity';


@Controller('facultys')
@ApiTags('facultys')
export class FacultysController {
  constructor(private readonly service: Service) { }

  @Post()
  @ApiCreatedResponse({ type: Entity })
  create(@Body() createDto: CreateDto) {
    return this.service.create(createDto);
  }

  @Get()
  @UseInterceptors(TransformFindManyResponse)
  @ApiBadGatewayResponse({type: ValidationErrorEntity})
  @ApiOkResponse({ type: EntityWithCount, isArray: true })
  async findAll( @Query(new ValidationPipe({
    transform: true,
    transformOptions: { enableImplicitConversion: true },
    forbidNonWhitelisted: true
  })) query: QueryDto) {
    return await this.service.findAll(query);
  }

  @Get(':uwinID')
  @UseInterceptors(TransformFindResponse)
  @UseFilters(new PrismaNotFoundExceptionFilter)
  @ApiCreatedResponse({ type: EntityWithCount })
  @ApiNotFoundResponse({type:ErrorEntity })
  findOne(@Param('uwinID') uwinID: string) {
    return this.service.findOne(uwinID);
  }

  @Patch(':uwinID')
  @ApiCreatedResponse({ type: Entity })
  update(@Param('uwinID') uwinID: string, @Body() updateDto: UpdateDto) {
    return this.service.update(uwinID, updateDto);
  }

  @Delete(':uwinID')
  @ApiOkResponse({ type: Entity })
  remove(@Param('uwinID') uwinID: string) {
    return this.service.remove(uwinID);
  }
}
