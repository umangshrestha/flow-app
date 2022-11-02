import { ApiProperty } from "@nestjs/swagger"
import { DepartmentEntity } from "./department.entity"

export class DepartmentEntityWithFaculty extends DepartmentEntity{
 
    @ApiProperty({ required: true })
    faculty: string
}