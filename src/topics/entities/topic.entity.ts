import { ApiProperty } from "@nestjs/swagger";
import { Topic } from "@prisma/client";

export class TopicEntity implements Topic {
    @ApiProperty()
    id: number;

    @ApiProperty()
    topic: string
}

export class TopicEntityWithCount extends TopicEntity {
    @ApiProperty()
    _count: string
}