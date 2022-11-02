import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsString } from "class-validator";

export class CreateTopicDto {
    @IsString()
    @ApiProperty({ required: true })
    topic: string;
    @IsArray()
    @ApiProperty()
    tags: string[];
}