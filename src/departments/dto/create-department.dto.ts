import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateDepartmentDto {

    @IsNotEmpty()
    @ApiProperty()
    department: string;

    @IsNotEmpty()
    @ApiProperty()
    faculty: string;
}

