import { TopicsService as Service } from './topics.service';
import { CreateTopicDto as CreateDto } from './dto/create-topic.dto';
import { UpdateTopicDto as UpdateDto } from './dto/update-topic.dto';
import { QueryTopicDto as QueryDto } from "./dto/query-topic.dto";
export declare class TopicsController {
    private readonly service;
    constructor(service: Service);
    create(createDto: CreateDto): import(".prisma/client").Prisma.Prisma__TopicClient<import(".prisma/client").Topic, never>;
    findAll(query: QueryDto): Promise<(import(".prisma/client").Topic & {
        _count: import(".prisma/client").Prisma.TopicCountOutputType;
    })[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__TopicClient<import(".prisma/client").Topic & {
        _count: import(".prisma/client").Prisma.TopicCountOutputType;
    }, never>;
    update(id: string, updateDto: UpdateDto): import(".prisma/client").Prisma.Prisma__TopicClient<import(".prisma/client").Topic, never>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__TopicClient<import(".prisma/client").Topic, never>;
}
