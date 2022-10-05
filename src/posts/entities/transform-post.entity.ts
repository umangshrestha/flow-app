import { ApiProperty } from "@nestjs/swagger";

export class PostGetEntity {
    @ApiProperty()
    id: number
    @ApiProperty()
    location: string;
    @ApiProperty()
    description: string;
    @ApiProperty({ required: false })
    uwinID: string
    @ApiProperty({ required: false })
    createdBy: string
    @ApiProperty({ required: false })
    updatedAt: Date;
    @ApiProperty({ required: false })
    createdAt: Date;
    @ApiProperty({ required: false })
    isTeams: boolean = false;
    @ApiProperty({ required: false })
    isMultiple: boolean = false;
    @ApiProperty({ required: true })
    firstName: string
    @ApiProperty({ required: true })
    lastName: string
    @ApiProperty({ required: true })
    department: string
    @ApiProperty({ required: true })
    faculty: string
    @ApiProperty({ required: true })
    email: string
    @ApiProperty({ required: true})
    topic: string[]
}