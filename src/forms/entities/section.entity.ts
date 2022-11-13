import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { FormSectionEntity } from "./form.entity";

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
    tag: string;

    @IsNotEmpty()
    @ApiProperty()
    sections: FormSectionEntity[];
}
