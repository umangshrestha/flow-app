import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFormDto as CreateDto } from './dto/create-form.dto';
import { UpdateFormDto as UpdateDto} from './dto/update-form.dto';

@Injectable()
export class FormsService {
  constructor(private prisma: PrismaService) { }

  create({tag, ...data}: CreateDto) {
    return 'This action adds a new form';
  }

  findAll() {
    return `This action returns all forms`;
  }

  findOne(id: number) {
    return `This action returns a #${id} form`;
  }

  update(id: number, updateDto: UpdateDto) {
    return `This action updates a #${id} form`;
  }

  remove(id: number) {
    return this.prisma.form.delete({
      where: { id },
    });
  }
}
