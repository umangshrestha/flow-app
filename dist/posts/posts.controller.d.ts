import { PostsService as Service } from './posts.service';
import { CreatePostDto as CreateDto } from './dto/connect-post.dto';
import { UpdatePostDto as UpdateDto } from './dto/update-post.dto';
import { QueryPostDto as QueryDto } from './dto/query-post.dto';
export declare class PostsController {
    private readonly service;
    constructor(service: Service);
    create(createDto: CreateDto): import(".prisma/client").Prisma.Prisma__PostClient<import(".prisma/client").Post, never>;
    findAll(query: QueryDto): Promise<(import(".prisma/client").Post & {
        topic: {
            topic: string;
        }[];
        faculty: import(".prisma/client").Faculty;
    })[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__PostClient<import(".prisma/client").Post & {
        topic: {
            topic: string;
        }[];
        faculty: import(".prisma/client").Faculty;
    }, never>;
    update(id: string, updateDto: UpdateDto): import(".prisma/client").Prisma.Prisma__PostClient<import(".prisma/client").Post, never>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__PostClient<import(".prisma/client").Post, never>;
}
