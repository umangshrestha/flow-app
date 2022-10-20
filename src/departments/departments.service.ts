import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { QueryInput } from '../shared/dto/query.input';
import { CreateDepartmentInput as CreateInput } from './dto/create-department.input';
import { UpdateDepartmentInput as UpdateInput } from './dto/update-department.input';

const include = {
  _count: true,
  staffs: true,
  faculty: true,
}

@Injectable()
export class DepartmentsService {
  constructor(private prisma: PrismaService) { }

  create({ department, faculty }: CreateInput) {
    return this.prisma.department.create({
      data: {
        department,
        faculty: {
          connect: { faculty }
        }
      },
      include
    });
  }

  findAll({ orderBy, sortOrder, ...query }: QueryInput) {
    return this.prisma.department.findMany({
      ...query,
      orderBy: {
        [orderBy]: sortOrder,
      },
      include
    });
  }

  findOne(id: number) {
    return this.prisma.department.findUniqueOrThrow({
      where: { id },
      include
    });
  }

  update({ id, department, faculty }: UpdateInput) {
    return this.prisma.department.update({
      where: { id },
      data: {
        department,
        faculty: {
          connect: { faculty }
        }
      },
      include
    });
  }

  remove(id: number) {
    return this.prisma.department.delete({
      where: { id },
      include
    });
  }
}
