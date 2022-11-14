import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { QueryDto } from 'src/shared/dto/query.dto';
import { CreateFormDto as CreateDto } from './dto/create-form.dto';
import { UpdateFormDto as UpdateDto } from './dto/update-form.dto';

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
          createMany: {
            data: sections.map(({ topics, ...data }) => ({
              ...data,
              topics: {
                connectOrCreate: topics.map((topic) => ({
                  where: { name: topic },
                  create: {
                    name: topic, connectOrCreate: ({
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
      include: {
        sections: {
          include: {
            topics: true
          }
        }
      }
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

      include: {
        sections: {
          include: {
            topics: true
          }
        }
      }
    })
  }

  findOne(id: number) {
    return this.prisma.form.findUniqueOrThrow({
      where: { id },
      include: {
        sections: {
          include: {
            topics: true
          }
        }
      }
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
                  where: { name: topic },
                  create: {
                    name: topic, connectOrCreate: ({
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
      include: {
        sections: {
          include: {
            topics: true
          }
        }
      }
    })
  }

  remove(id: number) {
    return this.prisma.form.delete({
      where: { id },
      include: {
        sections: {
          include: {
            topics: true
          }
        }
      },
    });
  }
}