import { CreateTopicDto } from './create-topic.dto';
declare const UpdateTopicDto_base: import("@nestjs/common").Type<Partial<CreateTopicDto>>;
export declare class UpdateTopicDto extends UpdateTopicDto_base {
    topic: string;
}
export {};
