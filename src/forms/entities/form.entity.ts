import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { FormSectionEntity } from "./form-section.entity";

export class FormEntity {
    @IsNotEmpty()
    @ApiProperty()
    id: number;

    @ApiProperty()
    name: string;

    @ApiProperty()
    description: string;

    @IsNotEmpty()
    @ApiProperty()
    helpInfo: string;

    @IsNotEmpty()
    @ApiProperty()
    tagId: number;

    @IsNotEmpty()
    @ApiProperty()
    tag: string;

    @IsNotEmpty()
    @ApiProperty({ type: [FormSectionEntity] })
    sections: FormSectionEntity[];
}
