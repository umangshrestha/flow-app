import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FormsService as Service} from './forms.service';
import { CreateFormDto as CreateDto} from './dto/create-form.dto';
import { UpdateFormDto as UpdateDto} from './dto/update-form.dto';

@Controller('forms')
export class FormsController {
  constructor(private readonly service: Service) {}

  @Post()
  create(@Body() createDto: CreateDto) {
    return this.service.create(createDto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDto: UpdateDto) {
    return this.service.update(+id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
