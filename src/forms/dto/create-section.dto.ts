import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateFormSectionDto {
    @IsNotEmpty()
    @ApiProperty()
    formType: string;

    @ApiProperty()
    paceholder: string;

    @ApiProperty()
    isRequred: boolean;

    @IsNotEmpty()
    @ApiProperty()
    helpInfo: string;

    @IsNotEmpty()
    @ApiProperty()
    items: string[];
}