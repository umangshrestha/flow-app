import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePostDto } from './dto/connect-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { QueryPostDto } from './dto/query-post.dto';
export declare class PostsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createPostDto: CreatePostDto): import(".prisma/client").Prisma.Prisma__PostClient<import(".prisma/client").Post, never>;
    findAll({ skip, take, uwinID, isMultiple, isTeams, fromDate, toDate }: QueryPostDto): import(".prisma/client").PrismaPromise<(import(".prisma/client").Post & {
        topic: {
            topic: string;
        }[];
        faculty: import(".prisma/client").Faculty;
    })[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__PostClient<import(".prisma/client").Post & {
        topic: {
            topic: string;
        }[];
        faculty: import(".prisma/client").Faculty;
    }, never>;
    update(id: number, updatePostDto: UpdatePostDto): import(".prisma/client").Prisma.Prisma__PostClient<import(".prisma/client").Post, never>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__PostClient<import(".prisma/client").Post, never>;
}
