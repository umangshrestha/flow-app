import { ApiProperty } from "@nestjs/swagger";

export class CreateFlowDto {
    @ApiProperty()
    location: string;
    @ApiProperty()
    description: string;
    @ApiProperty({ required: true })
    uwinID: string
    @ApiProperty({ required: true })
    createdBy: string
    @ApiProperty({ required: false })
    createdAt: Date;
    @ApiProperty({ default: false, required: false })
    tags: string[];
    @ApiProperty({
        required: true,
        description: "should be number array with each number representing topic ID."
    })
    topics: number[];
}