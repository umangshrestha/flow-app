import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { InstructorsService as Service} from './instructors.service';
import { CreateInstructorDto as CreateDto } from './dto/create-instructor.dto';
import { UpdateInstructorDto as UpdateDto} from './dto/update-instructor.dto';
import { ApiBadGatewayResponse, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { TypeValidator } from 'src/shared/validator';
import { InstructorEntity as Entity} from './entities/instructor.entity';
import { QueryDto } from 'src/shared/dto/query.dto';
import { ValidationErrorEntity } from 'src/shared/entity/validation-error.entity';

@Controller('instructors')
@ApiTags('instructors')
export class InstructorsController {
  constructor(private readonly service: Service) {}

  @Post()
  @ApiCreatedResponse({ type: Entity })
  @ApiOperation({ summary: 'Department has to be created before connecting to instructor' })
  create(@Body() createInstructorDto: CreateDto) {
    return this.service.create(createInstructorDto);
  }

  @Get()
  @ApiBadGatewayResponse({ type: ValidationErrorEntity })
  @ApiOkResponse({ type: Entity, isArray: true })
  findAll(@Query(TypeValidator) query: QueryDto) {
    return this.service.findAll(query);
  }

  @Get(':id')
  @ApiOkResponse({ type: Entity })
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: Entity })
  update(@Param('id') id: string, @Body() updateDto: UpdateDto) {
    return this.service.update(id, updateDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: Entity })
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
