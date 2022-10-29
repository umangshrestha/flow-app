import { Injectable } from '@nestjs/common';
import { CreateInstructorInput as CreateInput } from './dto/create-instructor.input';
import { UpdateInstructorInput as UpdateInput } from './dto/update-instructor.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { QueryInput } from '../shared/dto/query.input';

const include = {
  department: true
}

@Injectable()
export class InstructorsService {
  constructor(private prisma: PrismaService) { }

  create({ department, ...data }: CreateInput) {
    return this.prisma.instructor.create({
      data: {
        ...data,
        department: {
          connect: { department }
        }
      },
      include
    });
  }

  findAll({ orderBy, sortOrder, ...query }: QueryInput) {
    return this.prisma.instructor.findMany({
      ...query,
      orderBy: {
        [orderBy]: sortOrder,
      },
      include
    });
  }

  findOne(id: string) {
    return this.prisma.instructor.findUniqueOrThrow({
      where: { id },
      include
    });
  }

  update({ id, department, ...data }: UpdateInput) {

    return this.prisma.instructor.update({
      where: { id },
      data: {
        ...data,
        department: {
          connect: { department }
        }
      },
      include
    });
  }

  remove(id: string) {
    return this.prisma.instructor.delete({
      where: { id },
      include
    });
  }
}
