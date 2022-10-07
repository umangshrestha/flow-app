import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFacultyDto } from './dto/create-faculty.dto';
import { QueryFacultyDto } from './dto/query-faculty.dto';
import { UpdateFacultyDto } from './dto/update-faculty.dto';

@Injectable()
export class FacultysService {
  constructor(private prisma: PrismaService) { }

  create(createFacultyDto: CreateFacultyDto) {
    return this.prisma.faculty.create({ data: createFacultyDto });
  }

  findAll({skip, take, department, faculty, sortOrder, orderBy}: QueryFacultyDto) {
    return this.prisma.faculty.findMany({
      skip,
      take,
      where: {
        department,
        faculty,
      },
      include: {
        _count: true,
      },
      orderBy: {
        [orderBy]: sortOrder,
      },

    });
  }

  findOne(uwinID: string) {
    return this.prisma.faculty.findUniqueOrThrow({
      where: { uwinID }, include: {
        _count: true,
      }
    });
  }


  update(uwinID: string, updateFacultyDto: UpdateFacultyDto) {
    return this.prisma.faculty.update({
      where: { uwinID },
      data: updateFacultyDto,
    });;
  }

  remove(uwinID: string) {
    return this.prisma.faculty.delete({ where: { uwinID } });;
  }
}
