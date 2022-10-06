import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsOptional, IsString } from "class-validator";

export class QueryFacultyDto {
    @IsOptional()
    @IsNumber()
    @ApiProperty({ default: 0, required: false })
    skip: number;

    @IsOptional()
    @IsNumber()
    @ApiProperty({ default: 50, required: false })
    take: number;

    @IsOptional()
    @IsString()
    @ApiProperty({ required: false })
    department: string;

    @IsOptional()
    @IsString()
    @ApiProperty({ required: false })
    faculty: string;
}