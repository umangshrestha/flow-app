import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { TopicEntity } from "src/topics/entities/topic.entity";

export class FormSectionEntity {
    @IsNotEmpty()
    @ApiProperty()
    formType: string;

    @ApiProperty()
    paceholder: string;

    @ApiProperty()
    isRequred: boolean;

    @IsNotEmpty()
    @ApiProperty()
    helpInfo: string;

    @IsNotEmpty()
    @ApiProperty()
    topics: TopicEntity[];
}
