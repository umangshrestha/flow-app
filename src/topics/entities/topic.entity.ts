import { ApiProperty } from "@nestjs/swagger";
import { TagEntity } from "src/tags/entities/tag.entity";

export class TopicEntity {
    @ApiProperty()
    id: number;
    @ApiProperty()
    topic: string;
}


export class TopicEntityWithDate extends TopicEntity {
    @ApiProperty()
    readonly createdAt: string;
    @ApiProperty()
    readonly updatedAt: string;
}


export class TopicEntityWithTag extends TopicEntityWithDate {
    @ApiProperty()
    tags: TagEntity;
}
