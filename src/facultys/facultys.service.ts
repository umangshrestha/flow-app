import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { QueryInput } from '../shared/dto/query.input';
import { CreateFacultyInput as CreateInput } from './dto/create-faculty.input';
import { UpdateFacultyInput as UpdateInput } from './dto/update-faculty.input';

@Injectable()
export class FacultysService {
  constructor(private prisma: PrismaService) { }

  create(data: CreateInput) {
    return this.prisma.faculty.create({ data });
  }

  findAll({ orderBy, sortOrder, ...query }: QueryInput) {
    return this.prisma.faculty.findMany({
      ...query,
      orderBy: {
        [orderBy]: sortOrder,
      }
    });
  }

  findOne(id: number) {
    return this.prisma.faculty.findUniqueOrThrow({ where: { id } });
  }

  update({ id, ...updateInput }: UpdateInput) {
    return this.prisma.faculty.update({
      where: { id },
      data: updateInput,
    });
  }

  remove(id: number) {
    return this.prisma.faculty.delete({ where: { id } });
  }
}
