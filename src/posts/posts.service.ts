import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePostDto } from './dto/connect-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { QueryPostDto } from './dto/query-post.dto';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) { }

  create(createPostDto: CreatePostDto) {
    const { topic, uwinID, ...val } = createPostDto;
    const topics: { id: number }[] = createPostDto.topic.map((x: number) => ({ id: x }));
    return this.prisma.post.create({
      data: {
        ...val,
        topic: { connect: topics },
        faculty: { connect: { uwinID } },
      }
    });
  }

  findAll({ skip, take, uwinID, isMultiple, isTeams, fromDate, toDate }: QueryPostDto) {
    return this.prisma.post.findMany({
      skip,
      take,
      where: {
        uwinID, isMultiple, isTeams,
        createdAt: {
          gte: fromDate,
          lte: toDate,
        }
      },
      include: {
        faculty: true,
        topic: {
          select: {
            topic: true,
          }
        }
      }
    });
  }

  findOne(id: number) {
    return this.prisma.post.findUniqueOrThrow({
      where: { id },
      include: {
        faculty: true,
        topic: {
          select: {
            topic: true,
          }
        }
      }
    });
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return this.prisma.post.update({ where: { id }, data: updatePostDto });
  }

  remove(id: number) {
    return this.prisma.post.delete({ where: { id } });;
  }
}
