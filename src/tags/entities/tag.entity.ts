import { ApiProperty } from "@nestjs/swagger";
import { TopicEntity } from "src/topics/entities/topic.entity";

export class TagEntity {
    @ApiProperty()
    readonly id: number
    @ApiProperty()
    tag: string
    @ApiProperty()
    readonly createdAt: Date;
    @ApiProperty()
    readonly updatedAt: Date;
}
