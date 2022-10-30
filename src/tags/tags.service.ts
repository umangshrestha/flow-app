import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateTagInput as UpdateInput } from './dto/update-tag.input';
import { QueryInput } from '../shared/dto/query.input';

const include = {
  topics: true
}
@Injectable()
export class TagsService {
  constructor(private prisma: PrismaService) { }

  create(tag: string) {
    return this.prisma.tag.create({
      data: { tag }
    })

  }
  findAll({ orderBy, sortOrder, ...query }: QueryInput) {
    return this.prisma.tag.findMany({
      ...query,
      orderBy: {
        [orderBy]: sortOrder,
      },
      include
    });
  }

  findOne(id: number) {
    return this.prisma.tag.findUniqueOrThrow({
      where: { id },
      include
    });
  }

  update({ id, ...updateInput }: UpdateInput) {
    return this.prisma.tag.update({
      where: { id },
      data: updateInput,
      include
    });
  }

  remove(id: number) {
    return this.prisma.tag.delete({
      where: { id },
      include
    });
  }
}
