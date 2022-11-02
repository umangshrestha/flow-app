import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class UpdateUserDto {
    @ApiProperty({ required: false })
    name?: string;

    @ApiProperty({ required: false })
    @IsEmail()
    email?: string
    
    @ApiProperty({ required: false })
    newPassword?: string;

    @IsNotEmpty()
    @ApiProperty({ required: true })
    @Length(6, 30)
    password: string;
}
