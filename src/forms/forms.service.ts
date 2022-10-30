import { Injectable } from '@nestjs/common';
import { connect } from 'http2';
import { FormSectionService } from 'src/form-section/form-section.service';
import { QueryInput } from 'src/shared/dto/query.input';
import { PrismaService } from '../prisma/prisma.service';
import { CreateFormInput as CreateInput } from './dto/create-form.input';
import { UpdateFormInput as UpdateInput } from './dto/update-form.input';

const include = {
  _count: true,
  sections: true,
}

@Injectable()
export class FormsService {
  constructor(private prisma: PrismaService, private formSectionService: FormSectionService) { }

  async create({ tag, sections, ...createInput }: CreateInput) {
    const {id} =  await this.prisma.form.create({
      data: {
        ...createInput,
        tag: {
          connect: {tag}
        },
      },
      select:{
        id: true
      }
    })
    return await this.formSectionService.update({id, ...sections});
  }

  findAll(query: QueryInput) {
    return `This action returns all forms`;
  }

  findOne(id: number) {
    return `This action returns a #${id} form`;
  }

  update({ id, ...updateInput }: UpdateInput) {
    return `This action updates a #${id} form`;
  }

  remove(id: number) {
    return this.prisma.form.delete({
      where: { id },
      include
    });
  }
}
