import { ApiProperty } from "@nestjs/swagger";
import { FacultyEntity } from "./faculty.entity";

export class FacultyEntityWithCount extends FacultyEntity {
    @ApiProperty({required: true})
    _count:      number 
}
