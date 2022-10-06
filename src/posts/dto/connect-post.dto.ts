import { ApiProperty } from "@nestjs/swagger";

export class CreatePostDto {
    @ApiProperty()
    location: string;
    @ApiProperty()
    description: string;
    @ApiProperty({ required: true })
    uwinID: string
    @ApiProperty({ required: true })
    createdBy: string
    @ApiProperty({ required: false })
    updatedAt: Date;
    @ApiProperty({ required: false })
    createdAt: Date;
    @ApiProperty({ default: false, required: false })
    isTeams: boolean;
    @ApiProperty({ default: false, required: false })
    isMultiple: boolean;
    @ApiProperty({
        required: true,
        description: "should be number array with each number representing topic ID."
    })
    topic: number[];
}