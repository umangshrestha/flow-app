import { ApiProperty } from "@nestjs/swagger";
import { TopicEntity } from "./topic.entity";

export class TopicEntityWithDate extends TopicEntity {
    @ApiProperty()
    readonly createdAt: Date;
    @ApiProperty()
    readonly updatedAt: Date;
}
