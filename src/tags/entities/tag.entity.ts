import { ApiProperty } from "@nestjs/swagger";

export class TagEntity {
    @ApiProperty()
    readonly id: number
    @ApiProperty()
    tag: string
}
