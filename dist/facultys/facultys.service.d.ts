import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFacultyDto } from './dto/create-faculty.dto';
import { QueryFacultyDto } from './dto/query-faculty.dto';
import { UpdateFacultyDto } from './dto/update-faculty.dto';
export declare class FacultysService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createFacultyDto: CreateFacultyDto): import(".prisma/client").Prisma.Prisma__FacultyClient<import(".prisma/client").Faculty, never>;
    findAll(query: QueryFacultyDto): import(".prisma/client").PrismaPromise<(import(".prisma/client").Faculty & {
        _count: import(".prisma/client").Prisma.FacultyCountOutputType;
    })[]>;
    findOne(uwinID: string): import(".prisma/client").Prisma.Prisma__FacultyClient<import(".prisma/client").Faculty & {
        _count: import(".prisma/client").Prisma.FacultyCountOutputType;
    }, never>;
    update(uwinID: string, updateFacultyDto: UpdateFacultyDto): import(".prisma/client").Prisma.Prisma__FacultyClient<import(".prisma/client").Faculty, never>;
    remove(uwinID: string): import(".prisma/client").Prisma.Prisma__FacultyClient<import(".prisma/client").Faculty, never>;
}
