import { ApiProperty } from '@nestjs/swagger';

export class UpdateFacultyDto {
    @ApiProperty()
    id:     number
    @ApiProperty({required: true})
    faculty:    string 
}
