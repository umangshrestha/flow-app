import { ApiProperty } from "@nestjs/swagger"

export class CreateFacultyDto {
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
