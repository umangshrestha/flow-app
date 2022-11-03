import { Injectable } from '@nestjs/common';
import { CreateInstructorDto as CreateDto } from './dto/create-instructor.dto';
import { UpdateInstructorDto as UpdateDto } from './dto/update-instructor.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { QueryDto, QueryLimitDto } from 'src/shared/dto/query.dto';

@Injectable()
export class InstructorsService {
  constructor(private prisma: PrismaService) { }

  create({ department, ...data }: CreateDto) {
    return this.prisma.instructor.create({
      data: {
        ...data,
        department: {
          connect: { department }
        }
      },
    });
  }

  findAll({ orderBy, sortOrder, contains, ...query }: QueryDto) {
    return this.prisma.instructor.findMany({
      ...query,
      where: {
        fullName: {
          contains
        }
      },
      orderBy: {
        [orderBy]: sortOrder,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.instructor.findUniqueOrThrow({
      where: { id },
    });
  }


  findOneFlows(id: string, { skip, take }: QueryLimitDto) {
    return this.prisma.instructor.findUniqueOrThrow({
      where: { id },
      include: {
        _count: {
          select: {
            flows: true,
          }
        },
        flows: {
          skip,
          take,
        }
      }
    });
  }

  update(id: string, {department, ...data }: UpdateDto) {
    return this.prisma.instructor.update({
      where: { id },
      data: {
        ...data,
        department: {
          connect: { department }
        }
      },
    });
  }

  remove(id: string) {
    return this.prisma.instructor.delete({
      where: { id },
    });
  }
}