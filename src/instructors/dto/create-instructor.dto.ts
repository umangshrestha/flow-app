import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsOptional, IsString } from "class-validator";

export class CreateInstructorDto {
    @IsString()
    @ApiProperty({ required: true })
    id: string;
    @IsString()
    @ApiProperty({ default: "Unknown" })
    department: string;
    @IsEmail()
    @ApiProperty({ required: true })
    email: string;
    @IsOptional()
    @IsString()
    @ApiProperty()
    fullName: string;
}