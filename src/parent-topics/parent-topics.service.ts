import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateParentTopicInput as CreateInput } from './dto/create-parent-topic.input';
import { UpdateParentTopicInput as UpdateInput } from './dto/update-parent-topic.input';
import { QueryInput } from '../shared/dto/query.input';

const include = {
  _count: true,
  majorTopics: true,
}
@Injectable()
export class ParentTopicsService {
  constructor(private prisma: PrismaService) { }

  create(data: CreateInput) {
    return this.prisma.parentTopic.create({
      data,
      include
    });
  }

  findAll({ orderBy, sortOrder, ...query }: QueryInput) {
    return this.prisma.parentTopic.findMany({
      ...query,
      orderBy: {
        [orderBy]: sortOrder,
      },
      include
    });
  }

  findOne(id: number) {
    return this.prisma.parentTopic.findUniqueOrThrow({
      where: { id },
      include
    });
  }

  update({ id, ...updateInput }: UpdateInput) {
    return this.prisma.parentTopic.update({
      where: { id },
      data: updateInput,
      include
    });
  }

  remove(id: number) {
    return this.prisma.parentTopic.delete({
      where: { id },
      include
    });
  }
}
