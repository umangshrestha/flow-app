import { ApiProperty } from "@nestjs/swagger";
import { DepartmentEntity } from "src/departments/entities/department.entity";

export class FacultyEntity {
    @ApiProperty()
    id: number
    @ApiProperty()
    faculty: string
}

export class FacultyWithCount extends FacultyEntity {
    @ApiProperty()
    departments_count: number
}


export class FacultyWithDepartment extends  FacultyEntity{
    @ApiProperty()
    page: string
    @ApiProperty({isArray: true})
    departments: DepartmentEntity
}

