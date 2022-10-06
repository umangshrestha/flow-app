import { Topic } from "@prisma/client";
export declare class TopicEntity implements Topic {
    id: number;
    topic: string;
}
export declare class TopicEntityWithCount extends TopicEntity {
    _count: string;
}
