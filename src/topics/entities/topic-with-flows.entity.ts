import { ApiProperty } from "@nestjs/swagger"
import { FlowEntity } from "src/flows/entities/flow.entity"
import { TopicEntity } from "src/topics/entities/topic.entity"

export class TopicEntityWithFlow  extends TopicEntity{
    @ApiProperty()
    page: string
    @ApiProperty()
    flows_count: number
    @ApiProperty({isArray: true})
    flows: FlowEntity

}