import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateFormSectionDto as UpdateDto } from './dto/update-section.dto';


const include = {
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


@Injectable()
export class FormSectionService {
    constructor(private prisma: PrismaService) { }

    findOne(id: number) {
        return this.prisma.formSection.findUniqueOrThrow({
            where: { id },
            include
        })
    }

    update(id: number, { topics, ...data }: UpdateDto) {
        return this.prisma.formSection.update({
            where: { id },
            data: {
                ...data,
                topics: {
                    connectOrCreate: topics.map((topic) => ({
                        where: { topic },
                        create: { topic }
                    }))
                }
            },
            include
        })
    }

    remove(id: number) {
        return this.prisma.formSection.delete({
            where: { id },
            include
        });
    }
}