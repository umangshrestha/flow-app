import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateTopicDto } from './create-topic.dto';

export class UpdateTopicDto extends PartialType(CreateTopicDto) {
    @ApiProperty({ required: true })
    topic: string;
}
