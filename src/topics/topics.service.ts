import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTopicDto } from './dto/create-topic.dto';
import { QueryTopicDto } from './dto/query-topic.dto';
import { UpdateTopicDto } from './dto/update-topic.dto';

@Injectable()
export class TopicsService {
  constructor(private prisma: PrismaService) { }

  create(createTopicDto: CreateTopicDto) {
    return this.prisma.topic.create({ data: createTopicDto });
  }

  findAll(query: QueryTopicDto) {
    return this.prisma.topic.findMany({
      ...query,
      include: {
        _count: true,
      }
    });
  }

  findOne(id: number) {
    return this.prisma.topic.findUnique({
      where: { id },
      include: {
        _count: true,
      }
    });
  }

  update(id: number, updateTopicDto: UpdateTopicDto) {
    return this.prisma.topic.update({
      where: { id },
      data: updateTopicDto,
    });
  }

  remove(id: number) {
    return this.prisma.topic.delete({ where: { id } });;
  }
}