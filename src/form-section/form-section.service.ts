import { Injectable } from '@nestjs/common';
import { CreateFormSectionInput as CreateInput} from './dto/create-form-section.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateFormSectionInput as UpdateInput } from './dto/update-form-section.input';

const include = {
  _count: true,
  items: true,
}

@Injectable()
export class FormSectionService {
  constructor(private prisma: PrismaService) { }

  update({ id, items, tag, ...updateInput }: UpdateInput) {

    return items.map(topic => this.prisma.formSection.update({
      where: { id },
      data: {
        ...updateInput,
        items: {
          connectOrCreate: {
            where: { topic },
            create: {
              topic,
              tag: {
                connect: {
                  tag,
                }
              }
            },
          }
        },
      },
      include
    }));
  }

  remove(id: number) {
    return this.prisma.formSection.delete({
      where: { id },
      include
    });
  }
}
