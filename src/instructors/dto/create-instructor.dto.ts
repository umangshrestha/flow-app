import { ApiProperty } from "@nestjs/swagger";

export class CreateInstructorDto {
    @ApiProperty({ required: true })
    id: string;
    @ApiProperty({ default: "Unknown" })
    department: string;
    @ApiProperty({ required: true })
    email: string;
    @ApiProperty()
    fullName: string;
}