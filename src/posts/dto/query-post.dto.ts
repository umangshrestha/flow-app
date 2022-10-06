import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsDate, IsDateString, IsNumber, IsOptional, IsString } from "class-validator";



export class QueryPostDto {
    @IsOptional()
    @IsNumber()
    @ApiProperty({default: 0, required: false})
    skip: number;
    
    @IsOptional()
    @IsNumber()
    @ApiProperty({default: 10, required: false})
    take: number;

    @IsOptional()
    @IsString()
    @ApiProperty({required: false})
    uwinID: string;

    @IsOptional()
    @IsBoolean()
    @ApiProperty({default: false, required: false})
    isTeams: boolean;

    @IsOptional()
    @IsBoolean()
    @ApiProperty({default: false, required: false})
    isMultiple: boolean;

    @IsOptional()
    @IsDate()
    @ApiProperty({default: new Date("2021-10-15T00:00:00.000Z") , required: false})
    fromDate: Date;

    @IsOptional()
    @IsDate()
    @ApiProperty({default: new Date("2022-10-15T00:00:00.000Z"), required: false})
    toDate: Date;

}