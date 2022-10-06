import { FacultysService as Service } from './facultys.service';
import { CreateFacultyDto as CreateDto } from './dto/create-faculty.dto';
import { UpdateFacultyDto as UpdateDto } from './dto/update-faculty.dto';
import { QueryFacultyDto as QueryDto } from "./dto/query-faculty.dto";
export declare class FacultysController {
    private readonly service;
    constructor(service: Service);
    create(createDto: CreateDto): import(".prisma/client").Prisma.Prisma__FacultyClient<import(".prisma/client").Faculty, never>;
    findAll(query: QueryDto): Promise<(import(".prisma/client").Faculty & {
        _count: import(".prisma/client").Prisma.FacultyCountOutputType;
    })[]>;
    findOne(uwinID: string): import(".prisma/client").Prisma.Prisma__FacultyClient<import(".prisma/client").Faculty & {
        _count: import(".prisma/client").Prisma.FacultyCountOutputType;
    }, never>;
    update(uwinID: string, updateDto: UpdateDto): import(".prisma/client").Prisma.Prisma__FacultyClient<import(".prisma/client").Faculty, never>;
    remove(uwinID: string): import(".prisma/client").Prisma.Prisma__FacultyClient<import(".prisma/client").Faculty, never>;
}
