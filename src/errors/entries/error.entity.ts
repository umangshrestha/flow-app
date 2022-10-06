import { ApiProperty } from "@nestjs/swagger";

export class ErrorEntity {
    @ApiProperty({required: true})
    error:     string
    @ApiProperty({required: true})
    statusCode: number
}