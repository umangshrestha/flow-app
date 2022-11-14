import { ApiProperty } from "@nestjs/swagger"
import { FlowEntity } from "src/flows/entities/flow.entity"
import { TagEntity } from "./tag.entity"

export class TagEntityWithFlow  extends TagEntity{
    @ApiProperty()
    page: string
    @ApiProperty()
    flows_count: number
    @ApiProperty({type: [FlowEntity]})
    flows: FlowEntity[]

}