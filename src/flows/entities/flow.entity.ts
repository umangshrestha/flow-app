import { ApiProperty } from "@nestjs/swagger";
import { TagEntityBase as TagEntity } from "src/tags/entities/tag.entity";
import { TopicEntity } from "src/topics/entities/topic.entity";



export class FlowEntityBase {
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
}

export class FlowEntity extends FlowEntityBase{
    @ApiProperty({isArray: true})
    tags: TagEntity;
    @ApiProperty({isArray: true})
    topics:TopicEntity;
}
