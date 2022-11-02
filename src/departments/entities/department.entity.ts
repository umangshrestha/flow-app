import { ApiProperty } from "@nestjs/swagger"

export class DepartmentEntity {
    @ApiProperty({ required: true })
    id: number
    @ApiProperty({ required: true })
    department: string
}


export class DepartmentWithFaculty extends DepartmentEntity{
    @ApiProperty({ required: true })
    facultyId: number
    @ApiProperty({ required: true })
    faculty: string
}