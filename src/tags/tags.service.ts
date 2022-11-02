import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTagDto as CreateDto } from './dto/create-tag.dto';
import { UpdateTagDto as UpdateDto } from './dto/update-tag.dto';
import { QueryLimitDto, QueryTimeDto as QueryDto } from 'src/shared/dto/query.dto';

@Injectable()
export class TagsService {
  constructor(private prisma: PrismaService) { }

  createMany(data: CreateDto[]) {
    return this.prisma.tag.createMany({ data });
  }

  findAll({ skip, take, contains, fromDate: gte, toDate: lte, sortOrder, orderBy }: QueryDto) {
    return this.prisma.tag.findMany({
      skip,
      take,
      where: {
        tag: { contains },
        updatedAt: {
          gte,
          lte
        }
      },
      orderBy: {
        [orderBy]: sortOrder,
      },
    });
  }

  async findOne(id: number, { skip, take }: QueryLimitDto) {
    return Object.assign({ page: `?skip=${skip}&take=${take}` },
      await this.prisma.tag.findUniqueOrThrow({
        where: { id },
        include: {
          topics: {
            skip,
            take,
            select: {
              id: true,
              topic: true
            }
          }
        }
      }));
  }

  update(id: number, data: UpdateDto) {
    return this.prisma.tag.update({
      where: { id },
      data
    });
  }

  remove(id: number) {
    return this.prisma.tag.delete({
      where: { id },
    });
  }
}
