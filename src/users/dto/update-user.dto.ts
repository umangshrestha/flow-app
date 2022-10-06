import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto{
   
    @IsNotEmpty()
    @ApiProperty({required: true}) 
    newPassword: string;

    @IsNotEmpty()
    @ApiProperty({required: true}) 
    oldPassword: string;

}
