import { ApiProperty } from "@nestjs/swagger";

export class InstructorEntity {
    @ApiProperty({ required: true })
    id: string;
    @ApiProperty({ required: true })
    email: string;
    @ApiProperty()
    fullName: string;
    @ApiProperty({ required: true })
    departmentId: number
    @ApiProperty({ required: true })
    facultyId: number
    @ApiProperty({ required: true })
    department: string
    @ApiProperty({ required: true })
    faculty: string
}
