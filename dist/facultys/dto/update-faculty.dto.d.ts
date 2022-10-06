import { CreateFacultyDto } from './create-faculty.dto';
declare const UpdateFacultyDto_base: import("@nestjs/common").Type<Partial<CreateFacultyDto>>;
export declare class UpdateFacultyDto extends UpdateFacultyDto_base {
    uwinID: string;
    firstName: string;
    lastName: string;
    department: string;
    faculty: string;
    email: string;
}
export {};
