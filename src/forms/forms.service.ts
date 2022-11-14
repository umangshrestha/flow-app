import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { QueryDto } from 'src/shared/dto/query.dto';
import { CreateFormDto as CreateDto } from './dto/create-form.dto';
import { UpdateFormDto as UpdateDto } from './dto/update-form.dto';


const include =  {
  tag: true,
  sections: {
    include: {
      topics: {
        select: {
          topic: true,
          id: true,
          updatedAt: false,
          createdAt: false,
          formSectionId: false,
        }
      }
    }
  }
}

@Injectable()
export class FormsService {
  constructor(private prisma: PrismaService) { }

  async create({ tag, sections, ...data }: CreateDto) {
    return this.prisma.form.create({
      data: {
        ...data,
        tag: {
          connectOrCreate: ({
            where: { tag },
            create: { tag }
          })
        },
        sections: {
          connectOrCreate: sections.map(({ topics, id, ...data }) => ({
            where: { id },
            create: {
              ...data,
              topics: {
                connectOrCreate: topics.map((topic) => ({
                  where: { topic },
                  create: {
                    topic,
                    tags: {
                      connectOrCreate: ({
                        where: { tag },
                        create: { tag }
                      })
                    }
                  }
                }))
              }
            }
          })),
        }
      },
      include
    })
  }


  findAll({ skip, take, contains, sortOrder, orderBy }: QueryDto) {
    return this.prisma.form.findMany({
      skip,
      take,
      where: {
        description: { contains },
      },
      orderBy: {
        [orderBy]: sortOrder,
      },

      include
    })
  }

  findOne(id: number) {
    return this.prisma.form.findUniqueOrThrow({
      where: { id },
      include
    })
  }

  update(id: number, { tag, sections, ...data }: UpdateDto) {
    return this.prisma.form.update({
      where: { id },
      data: {
        ...data,
        tag: {
          connectOrCreate: ({
            where: { tag },
            create: { tag }
          })
        },
        sections: {
          createMany: {
            data: sections.map(({ topics, ...data }) => ({
              ...data,
              topics: {
                connectOrCreate: topics.map((topic) => ({
                  where: { topic },
                  create: {
                    topic,
                    connectOrCreate: ({
                      where: { tag },
                      create: { tag }
                    })
                  }
                }))
              }
            })),
          }
        }
      },
      include
    })
  }

  remove(id: number) {
    return this.prisma.form.delete({
      where: { id },
      include
    });
  }
}