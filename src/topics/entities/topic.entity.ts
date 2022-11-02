import { ApiProperty } from "@nestjs/swagger";
import { TagEntity } from "src/tags/entities/tag.entity";

export class TopicEntity {
    @ApiProperty()
    id: number;
    @ApiProperty()
    topic: string;
}

