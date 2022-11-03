import { ApiProperty } from "@nestjs/swagger"


export class DepartmentEntityBase {
    @ApiProperty({ required: true })
    id: number
    @ApiProperty({ required: true })
    department: string
}

export class DepartmentEntity  extends DepartmentEntityBase{
    @ApiProperty({ required: true })
    facultyId: number
}
