import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { QueryDto, QueryLimitDto } from '../shared/dto/query.dto';
import { CreateDepartmentDto as CreateDto } from './dto/create-department.dto';
import { UpdateDepartmentDto as UpdateDto } from './dto/update-department.dto';


const include = {
  faculty: true,
}

@Injectable()
export class DepartmentsService {
  constructor(private prisma: PrismaService) { }

  create({ department, faculty }: CreateDto) {
    return this.prisma.department.create({
      data: {
        department,
        faculty: {
          connectOrCreate: {
            create: { faculty },
            where: { faculty },
          }
        }
      },
      include,
    });
  }

  findAll({ orderBy, sortOrder, contains, ...query }: QueryDto) {
    return this.prisma.department.findMany({
      ...query,
      where: {
        department: { contains }
      },
      orderBy: {
        [orderBy]: sortOrder,
      },
      include
    });
  }

  findOne(id: number) {
    return this.prisma.department.findUniqueOrThrow({
      where: { id },
      include: {
        faculty: true,
      },
    });
  }


  listDepartment(facultyId: number, query: QueryLimitDto) {
    return this.prisma.department.findMany({
      where: { facultyId },
      select: {
        id: true,
        department: true
      }
    });
  }

  update(id: number, { department, faculty }: UpdateDto) {
    return this.prisma.department.update({
      where: { id },
      data: {
        department,
        faculty: {
          connectOrCreate: {
            create: { faculty },
            where: { faculty },
          }
        }
      },
    });
  }

  remove(id: number) {
    return this.prisma.department.delete({
      where: { id },
    });
  }
}