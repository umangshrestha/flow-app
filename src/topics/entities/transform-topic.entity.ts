import { ApiProperty } from "@nestjs/swagger";
import { TopicEntity } from "./topic.entity";

export class TopicEntityWithCount extends TopicEntity {
    @ApiProperty()
    _count: string
}