import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateFacultyDto } from './create-faculty.dto';

export class UpdateFacultyDto extends PartialType(CreateFacultyDto) {
    @ApiProperty()
    uwinID:     string
    @ApiProperty()
    firstName:  string
    @ApiProperty()
    lastName:   string
    @ApiProperty()
    department: string
    @ApiProperty()
    faculty:    string
    @ApiProperty()
    email:      string 
}
