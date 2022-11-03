import { ApiProperty } from "@nestjs/swagger"
import { FlowEntityBase as FlowEntity } from "src/flows/entities/flow.entity"
import { TagEntity } from "./tag.entity"

export class TagEntityWithTopic  extends TagEntity{
    @ApiProperty()
    page: string
    @ApiProperty()
    topics_count: number
    @ApiProperty({isArray: true})
    topics: FlowEntity
}