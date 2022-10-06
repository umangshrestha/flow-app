import { ApiProperty } from "@nestjs/swagger"
import { Faculty } from "@prisma/client"

export class FacultyEntity implements Faculty {
    @ApiProperty({required: true})
    uwinID:     string
    @ApiProperty({required: true})
    firstName:  string
    @ApiProperty({required: true})
    lastName:   string
    @ApiProperty({required: true})
    department: string
    @ApiProperty({required: true})
    faculty:    string
    @ApiProperty({required: true})
    email:      string 
}

export class FacultyEntityWithCount extends FacultyEntity {
    @ApiProperty({required: true})
    _count:      number 
}

