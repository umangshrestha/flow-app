import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { QueryDto } from 'src/shared/dto/query.dto';
import { CreateTopicDto as CreateDto } from './dto/create-topic.dto';
import { UpdateTopicDto as UpdateDto } from './dto/update-topic.dto';


const select = {
  id: true,
  topic: true,
  createdAt: false,
  updatedAt: false,
}

@Injectable()
export class TopicsService {
  constructor(
    private prisma: PrismaService) { }

  async create({ topic, tags: tagArr }: CreateDto) {
    return this.prisma.topic.create({
      data: {
        topic,
        tags: {
          connectOrCreate: tagArr.map(tag => ({
            where: { tag },
            create: { tag }
          })),
        },
      }
    })
  }

  findAll({ orderBy, sortOrder, contains, ...query }: QueryDto) {
    return this.prisma.topic.findMany({
      ...query,
      where: {
        topic: { contains },
      },
      orderBy: {
        [orderBy]: sortOrder,
      },
      select
    },
    );
  }

  findOne(id: number) {
    return this.prisma.topic.findUniqueOrThrow({
      where: { id },
      include: {
        tags: {
          select: {
            id: true,
            tag: true,
          } 
        }
      }
    });
  }

  async update(id: number, { topic, tags: tagArr }: UpdateDto) {
    return this.prisma.topic.update({
      where: { id },
      data: {
        topic,
        tags: {
          connectOrCreate: tagArr.map(tag => ({
            where: { tag },
            create: { tag }
          }))
        }
      },
      select,
    });
  }

  remove(id: number) {
    return this.prisma.topic.delete({
      where: { id },
      select,
    });
  }
}
