import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';
import { CreateTopicDto } from './create-topic.dto';

export class UpdateTopicDto extends CreateTopicDto {
    @IsNumber()
    @ApiProperty({ required: true })
    id: number;
}
