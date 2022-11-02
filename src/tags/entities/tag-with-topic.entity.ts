import { ApiProperty } from "@nestjs/swagger"
import { TopicEntity } from "src/topics/entities/topic.entity"
import { TagEntity } from "./tag.entity"

export class TagWithTopicEntity  extends TagEntity{
    @ApiProperty()
    page: string
    @ApiProperty()
    topics: TopicEntity
}