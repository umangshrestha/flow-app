import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class UpdateFacultyDto {
    @IsInt()
    @ApiProperty()
    id:     number
    
    @IsString()
    @IsNotEmpty()
    @ApiProperty({required: true})
    faculty:    string 
}
