import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { CreateFormSectionDto } from "./create-section.dto";

export class CreateFormDto {
    @ApiProperty()
    name: string;

    @ApiProperty()
    description: string;

    @IsNotEmpty()
    @ApiProperty()
    helpInfo: string;

    @IsNotEmpty()
    @ApiProperty()
    tag: string;

    @IsNotEmpty()
    @ApiProperty({type: [CreateFormSectionDto]})
    sections: CreateFormSectionDto[];
}
