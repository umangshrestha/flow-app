import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseInterceptors } from '@nestjs/common';
import { FormsService as Service} from './forms.service';
import { CreateFormDto as CreateDto} from './dto/create-form.dto';
import { UpdateFormDto as UpdateDto} from './dto/update-form.dto';
import { ApiBadGatewayResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { FormEntity } from './entities/form.entity';
import { ValidationErrorEntity } from 'src/shared/entity/validation-error.entity';
import { QueryDto } from 'src/shared/dto/query.dto';
import { Flatten } from 'src/prisma/interceptors/flatten.interceptor';
import { FormSectionService } from './section.service';
import { FormSectionEntity } from './entities/form-section.entity';
import { UpdateFormSectionDto } from './dto/update-section.dto';

@Controller('forms')
@ApiTags('forms')
@UseInterceptors(new Flatten({key: 'tag'}))
export class FormsController {
  constructor(private readonly service: Service,
    private readonly sectionService : FormSectionService) {}

  @Post()
  @ApiOkResponse({ type: FormEntity })
  create(@Body() createDto: CreateDto) {
    return this.service.create(createDto);
  }

  @Get()
  @ApiOkResponse({ type: FormEntity })
  @ApiBadGatewayResponse({type: ValidationErrorEntity})
  findAll(@Query() query: QueryDto) {
    return this.service.findAll(query);
  }

  @Get(':id')
  @ApiOkResponse({ type: FormEntity })
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Get('section/:id')
  @ApiOkResponse({ type: FormEntity })
  findOneSection(@Param('id') id: string) {
    return this.sectionService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: FormEntity })
  update(@Param('id') id: string, @Body() updateDto: UpdateDto) {
    return this.service.update(+id, updateDto);
  }

  @Patch('section/:id')
  @ApiOkResponse({ type: FormSectionEntity })
  updateSection(@Param('id') id: string, @Body() updateDto: UpdateFormSectionDto) {
    return this.sectionService.update(+id, updateDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: FormEntity })
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }

  @Delete('section/:id')
  @ApiOkResponse({ type: FormSectionEntity })
  removeSection(@Param('id') id: string) {
    return this.sectionService.remove(+id);
  }
}
