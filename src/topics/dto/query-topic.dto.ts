import { ApiProperty } from "@nestjs/swagger";
import { Prisma } from "@prisma/client";
import { IsNumber, IsOptional } from "class-validator";

export class QueryTopicDto {
    @IsOptional()
    @IsNumber()
    @ApiProperty({default: 0, required: false})
    skip: number;
    
    @IsOptional()
    @IsNumber()
    @ApiProperty({default: 50, required: false})
    take: number;

    @IsOptional()
    @ApiProperty({required: false, default:"id", enum:["id", "topic", "query"]})
    orderBy:  string;

    @IsOptional()
    @ApiProperty({required: false, default:"asc", enum:["asc", "desc"]})
    sortOrder:  string;
}
