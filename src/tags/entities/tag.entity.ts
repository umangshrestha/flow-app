import { ApiProperty } from "@nestjs/swagger";

export class TagEntityBase {
    @ApiProperty()
    readonly id: number
    @ApiProperty()
    tag: string
}

export class TagEntity extends TagEntityBase {
    @ApiProperty()
    readonly createdAt: Date;
    @ApiProperty()
    readonly updatedAt: Date;
}
