import { ApiProperty } from "@nestjs/swagger"

export class DepartmentEntity {
    @ApiProperty({ required: true })
    id: number
    @ApiProperty({ required: true })
    department: string
    @ApiProperty({ required: true })
    facultyId: number
}
