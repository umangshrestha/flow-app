import { Injectable } from '@nestjs/common';
import { CreateFlowInput as CreateInput } from './dto/create-flow.input';
import { UpdateFlowInput as UpdateInput } from './dto/update-flow.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { QueryInput } from '../shared/dto/query.input';

const include = {
  instructor: true,
  tags: true,
  topics: true,
}

@Injectable()
export class FlowsService {
  constructor(private prisma: PrismaService) { }

  create({ uwinID, tags, topics, ...data }: CreateInput) {
    return this.prisma.flow.create({
      data: {
        ...data,
        instructor: {
          connect: { id: uwinID },
        },
        topics: {
          connect: topics.map(topic => ({ topic }))
        },
        tags: {
          connect: tags.map(tag => ({ tag })),
        }
      },
      include
    });
  }

  findAll({ orderBy, sortOrder, ...query }: QueryInput) {
    return this.prisma.flow.findMany({
      ...query,
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
    });
  }

  update({ id, uwinID, tags, topics, ...data }: UpdateInput) {
    return this.prisma.flow.update({
      where: { id },
      data: {
        ...data,
        instructor: {
          connect: { id: uwinID },
        },
        topics: {
          connect: topics.map(topic => ({ topic }))
        },
        tags: {
          connect: tags.map(tag => ({ tag })),
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
