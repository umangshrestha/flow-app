import { Injectable } from '@nestjs/common';
import { DepartmentsService } from 'src/departments/departments.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { QueryDto, QueryLimitDto } from 'src/shared/dto/query.dto';
import { UpdateFacultyDto as UpdateDto } from './dto/update-faculty.dto';


@Injectable()
export class FacultysService {
  constructor(private prisma: PrismaService, 
    private readonly departmentService: DepartmentsService
    ) { }

  async listDepartment(id: number, query: QueryLimitDto) {
    const faculty = await this.findOne(id);
    const departments = await this.departmentService.listDepartment(id, query);
    return {...faculty,      ...query,       departments};
  }

  findAll({ skip, take, contains, sortOrder, orderBy }: QueryDto) {
    return this.prisma.faculty.findMany({
      skip,
      take,
      where: {
        faculty: { contains },
      },
      orderBy: {
        [orderBy]: sortOrder,
      },
      include: {
        _count: true,
      }
    });
  }

  findOne(id: number) {
    return this.prisma.faculty.findUniqueOrThrow({ where: { id } });
  }

  update(id: number, updateDto: UpdateDto) {
    return this.prisma.faculty.update({
      where: { id },
      data: updateDto,
    });
  }

  remove(id: number) {
    return this.prisma.faculty.delete({ where: { id } });
  }
}
