import { Faculty } from "@prisma/client";
export declare class FacultyEntity implements Faculty {
    uwinID: string;
    firstName: string;
    lastName: string;
    department: string;
    faculty: string;
    email: string;
}
export declare class FacultyEntityWithCount extends FacultyEntity {
    _count: number;
}
