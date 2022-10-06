import { ApiProperty } from "@nestjs/swagger";
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

}