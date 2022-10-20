import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { QueryInput } from '../shared/dto/query.input';
import { CreateFacultyInput as CreateInput } from './dto/create-faculty.input';
import { UpdateFacultyInput as UpdateInput } from './dto/update-faculty.input';


const include = {
  _count: true,
  department: true
};
@Injectable()
export class FacultysService {
  constructor(private prisma: PrismaService) { }

  create(data: CreateInput) {
    return this.prisma.faculty.create({
      data,
      include
    });
  }

  findAll({ orderBy, sortOrder, ...query }: QueryInput) {
    return this.prisma.faculty.findMany({
      ...query,
      orderBy: {
        [orderBy]: sortOrder,
      },
      include
    });
  }

  findOne(id: number) {
    return this.prisma.faculty.findUniqueOrThrow({
      where: { id },
      include
    });
  }

  update({ id, ...updateInput }: UpdateInput) {
    return this.prisma.faculty.update({
      where: { id },
      data: updateInput,
      include
    });
  }

  remove(id: number) {
    return this.prisma.faculty.delete({
      where: { id },
      include
    });
  }
}
