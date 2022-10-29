import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { QueryInput } from 'src/shared/dto/query.input';
import { CreateTopicInput as CreateInput } from './dto/create-topic.input';
import { UpdateTopicInput as UpdateInput } from './dto/update-topic.input';

const include = {
  parentTopic: true,
}

@Injectable()
export class TopicsService {
  constructor(private prisma: PrismaService) { }


  create({ topic, parentTopic }: CreateInput) {
    return this.prisma.topic.create({
      data: {
        topic,
        parentTopic: {
          connectOrCreate: {
            where:{topic: parentTopic},
            create:{topic: parentTopic},
          }
        }
      },

    });
  }

  findAll({ orderBy, sortOrder, ...query }: QueryInput) {
    return this.prisma.topic.findMany({
      ...query,
      orderBy: {
        [orderBy]: sortOrder,
      },
      include
    });
  }

  findOne(id: number) {
    return this.prisma.topic.findUniqueOrThrow({
      where: { id },
      include
    });
  }

  update({ id, topic, parentTopic }: UpdateInput) {
    return this.prisma.topic.update({
      where: { id },
      data: {
        topic,
        parentTopic: {
          connectOrCreate: {
            where:{topic: parentTopic},
            create:{topic: parentTopic},
          }
        },
      },
      include
    });
  }

  remove(id: number) {
    return this.prisma.topic.delete({
      where: { id },
      include
    });
  }
}
