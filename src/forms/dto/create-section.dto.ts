import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateFormSectionDto {
    @ApiProperty()
    @IsOptional()
    id?: number
    
    @IsOptional()
    @ApiProperty()
    formType: string;

    @ApiProperty()
    @IsOptional()
    placeholder: string;

    @ApiProperty()
    @IsOptional()
    isRequired: boolean;

    @ApiProperty()
    @IsOptional()
    helpInfo: string;

    @IsOptional()
    @ApiProperty()
    topics: string[];
}