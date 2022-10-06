import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    @ApiProperty()
    firstName: string;
    
    @IsNotEmpty()
    @ApiProperty()
    lastName: string;

    @ApiProperty({ required: true })
    @IsNotEmpty()
    @IsEmail()
    email: string

    @ApiProperty({ required: false })
    @IsNotEmpty()
    password: string
}


