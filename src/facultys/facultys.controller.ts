import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseFilters, UseInterceptors} from '@nestjs/common';
import { FacultysService as Service} from './facultys.service';
import { UpdateFacultyDto as UpdateDto } from './dto/update-faculty.dto';
import { FacultyEntity, FacultyWithCount, FacultyWithDepartment} from './entities/faculty.entity';
import { ApiBadGatewayResponse, ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { QueryDto, QueryLimitDto } from 'src/shared/dto/query.dto';
import { TypeValidator } from 'src/shared/validator';
import { ValidationErrorEntity } from 'src/shared/entity/validation-error.entity';
import { ErrorEntity } from 'src/shared/entity/error.entity';
import { FlattenCount } from 'src/prisma/interceptors/count.interceptors';

@Controller('facultys')
@ApiTags('facultys')
export class FacultysController {
  constructor(private readonly service: Service) { }

  @Get()
  @ApiOperation({ summary: 'List all faculties with number of departments under it' })
  @UseInterceptors(new FlattenCount)
  @ApiBadGatewayResponse({type: ValidationErrorEntity})
  @ApiOkResponse({ type: FacultyWithCount, isArray: true })
  findAll( @Query(TypeValidator) query: QueryDto) {
    return this.service.findAll(query);
  }

  @Get(':id/list-departments')
  @ApiOperation({ summary: 'Find list of departments based on faculty' })
  @ApiOkResponse({ type: FacultyWithDepartment })
  @ApiBadGatewayResponse({ type: ValidationErrorEntity })
  @ApiNotFoundResponse({type: ErrorEntity })
  async listDepartments(@Param('id') id: string,  @Query(TypeValidator) query: QueryLimitDto) {
    return this.service.listDepartment(+id, query);
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: FacultyEntity })
  update(@Param('id') id: string, @Body() updateDto: UpdateDto) {
    return this.service.update(+id, updateDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: FacultyEntity })
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}

