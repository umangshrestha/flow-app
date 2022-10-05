import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTopicDto } from './dto/create-topic.dto';
import { QueryTopicDto } from './dto/query-topic.dto';
import { UpdateTopicDto } from './dto/update-topic.dto';
export declare class TopicsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createTopicDto: CreateTopicDto): import(".prisma/client").Prisma.Prisma__TopicClient<import(".prisma/client").Topic, never>;
    findAll(query: QueryTopicDto): import(".prisma/client").PrismaPromise<(import(".prisma/client").Topic & {
        _count: import(".prisma/client").Prisma.TopicCountOutputType;
    })[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__TopicClient<import(".prisma/client").Topic & {
        _count: import(".prisma/client").Prisma.TopicCountOutputType;
    }, never>;
    update(id: number, updateTopicDto: UpdateTopicDto): import(".prisma/client").Prisma.Prisma__TopicClient<import(".prisma/client").Topic, never>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__TopicClient<import(".prisma/client").Topic, never>;
}
