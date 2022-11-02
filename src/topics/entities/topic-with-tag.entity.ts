import { ApiProperty } from "@nestjs/swagger";
import { TagEntity } from "src/tags/entities/tag.entity";
import { TopicEntityWithDate } from "./topic-with-date.entity";

export class TopicEntityWithTag extends TopicEntityWithDate {
    @ApiProperty()
    tags: TagEntity;
}
