import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { QueryTimeDto as QueryDto } from 'src/shared/dto/query.dto';
import { CreateFlowDto as CreateDto } from './dto/create-flow.dto';
import { UpdateFlowDto as UpdateDto } from './dto/update-flow.dto';


const include =  {
  tags: {
    select: {
      id: true,
      tag: true
    }
  },
  topics: {
    select: {
      id: true,
      topic: true,
    }
  }
}

@Injectable()
export class FlowsService {
  constructor(private prisma: PrismaService) { }

  create({ tags, topics, uwinID, ...data }: CreateDto) {
    return this.prisma.flow.create({
      data: {
        ...data,
        instructor: {
          connect: { id: uwinID }
        },
        tags: {
          connectOrCreate: tags.map(tag => ({
            where: { tag },
            create: { tag },
          }))
        },
        topics: {
          connect: topics.map(id => ({ id }))
        }
      },
      include
    });
  }

  findAll({ skip, take, contains, fromDate: gte, toDate: lte, sortOrder, orderBy }: QueryDto) {
    return this.prisma.flow.findMany({
      skip,
      take,
      where: {
        description: { contains },
        updatedAt: {
          gte,
          lte
        }
      },
      orderBy: {
        [orderBy]: sortOrder,
      },
      include
    });
  }

  findOne(id: number) {
    return this.prisma.flow.findUniqueOrThrow({
      where: { id },
      include
    })
  }

  update(id: number, { tags, topics, uwinID, ...data }: UpdateDto) {
    return this.prisma.flow.update({
      where: { id },
      data: {
        ...data,
        instructor: {
          connect: { id: uwinID }
        },
        tags: {
          connectOrCreate: tags.map(tag => ({
            where: { tag },
            create: { tag },
          }))
        },
        topics: {
          connect: topics.map(id => ({ id }))
        }
      },
      include
    });

  }

  remove(id: number) {
    return this.prisma.flow.delete({
      where: { id },
      include
    });
  }
}
