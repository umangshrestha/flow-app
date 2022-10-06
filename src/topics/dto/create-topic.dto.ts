import { ApiProperty } from "@nestjs/swagger";

export class CreateTopicDto {
    @ApiProperty({required: true})
    topic: string;
}
