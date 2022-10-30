import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { QueryInput } from 'src/shared/dto/query.input';
import { CreateTopicInput as CreateInput } from './dto/create-topic.input';
import { UpdateTopicInput as UpdateInput } from './dto/update-topic.input';

const include = {
  tag: true,
}

@Injectable()
export class TopicsService {
  constructor(private prisma: PrismaService) { }

  create({ topic, tag }: CreateInput) {
    return this.prisma.topic.create({
      data: {
        topic,
        tag: {
          connectOrCreate: {
            where:{tag},
            create:{tag},
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

  update({ id, topic, tag }: UpdateInput) {
    return this.prisma.topic.update({
      where: { id },
      data: {
        topic,
        tag: {
          connectOrCreate: {
            where:{tag},
            create:{tag},
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
