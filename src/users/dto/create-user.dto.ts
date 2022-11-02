import { ApiProperty } from "@nestjs/swagger";
import { Role } from "@prisma/client";
import { IsEmail, IsNotEmpty, Length } from "class-validator";


export class CreateUserDto {
    @IsNotEmpty()
    @ApiProperty()
    name: string;

    @ApiProperty({ required: true })
    @IsNotEmpty()
    @IsEmail()
    email: string

    @ApiProperty({ required: false })
    @IsNotEmpty()
    @Length(6, 30)
    password: string

    @ApiProperty({default: Role.USER, enum: Role})
    role: Role
}


