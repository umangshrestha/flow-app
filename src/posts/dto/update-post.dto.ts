import { ApiProperty } from '@nestjs/swagger';

export class UpdatePostDto {
    @ApiProperty()
    location: string;
    @ApiProperty()
    description: string;
    @ApiProperty({ required: false })
    createdBy: string
    @ApiProperty({ required: false })
    updatedAt: Date;
    @ApiProperty({ required: false })
    createdAt: Date;
    @ApiProperty({ default: false, required: false })
    isTeams: boolean;
    @ApiProperty({ default: false, required: false })
    isMultiple: boolean;
}
