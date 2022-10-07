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


    @IsOptional()
    @ApiProperty({ required: false , default:"uwinID", enum:["department", "faculty", "uwinID", "firstName", "lastName"]})
    orderBy:  string;

    @IsOptional()
    @ApiProperty({required: false,default:"asc", enum:["asc", "desc"]})
    sortOrder:  string;
}