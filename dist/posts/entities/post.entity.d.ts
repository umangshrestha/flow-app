import { Post } from "@prisma/client";
import { FacultyEntity } from "src/facultys/entities/faculty.entity";
import { TopicEntity } from "src/topics/entities/topic.entity";
export declare class PostResponseEntity {
    id: number;
    location: string;
    description: string;
    uwinID: string;
    createdBy: string;
    updatedAt: Date;
    createdAt: Date;
    isTeams: boolean;
    isMultiple: boolean;
}
export declare class PostEntity implements Post {
    id: number;
    location: string;
    description: string;
    uwinID: string;
    createdBy: string;
    updatedAt: Date;
    createdAt: Date;
    isTeams: boolean;
    isMultiple: boolean;
    faculty: FacultyEntity;
    topic: TopicEntity[];
}
