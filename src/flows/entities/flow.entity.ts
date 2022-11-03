import { ApiProperty } from "@nestjs/swagger";
import { TagEntity } from "src/tags/entities/tag.entity";
import { TopicEntity } from "src/topics/entities/topic.entity";

export class FlowEntity {
    @ApiProperty()
    location: string;
    @ApiProperty()
    description: string;
    @ApiProperty()
    uwinID: string
    @ApiProperty()
    createdBy: string
    @ApiProperty()
    createdAt: Date;
    @ApiProperty()
    updatedAt: Date;
    @ApiProperty()
    tags: TagEntity[];
    @ApiProperty()
    topics:TopicEntity[];
}
