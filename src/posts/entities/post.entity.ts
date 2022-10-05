import { ApiProperty } from "@nestjs/swagger";
import { Post } from "@prisma/client";
import { FacultyEntity } from "src/facultys/entities/faculty.entity";
import { TopicEntity } from "src/topics/entities/topic.entity";


export class PostResponseEntity {
    @ApiProperty()
    id: number
    @ApiProperty()
    location: string;
    @ApiProperty()
    description: string;
    @ApiProperty({ required: false })
    uwinID: string
    @ApiProperty({ required: false })
    createdBy: string
    @ApiProperty({ required: false })
    updatedAt: Date;
    @ApiProperty({ required: false })
    createdAt: Date;
    @ApiProperty({ required: false })
    isTeams: boolean = false;
    @ApiProperty({ required: false })
    isMultiple: boolean = false;
}


export class PostEntity implements Post {
    @ApiProperty()
    id: number
    @ApiProperty()
    location: string;
    @ApiProperty()
    description: string;
    @ApiProperty({ required: false })
    uwinID: string
    @ApiProperty({ required: false })
    createdBy: string
    @ApiProperty({ required: false })
    updatedAt: Date;
    @ApiProperty({ required: false })
    createdAt: Date;
    @ApiProperty({ required: false })
    isTeams: boolean = false;
    @ApiProperty({ required: false })
    isMultiple: boolean = false;
    @ApiProperty({ type: () => FacultyEntity })
    faculty: FacultyEntity
    @ApiProperty({ type: () => FacultyEntity })
    topic: TopicEntity[]
}
