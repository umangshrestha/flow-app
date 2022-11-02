import { ApiProperty } from "@nestjs/swagger";

export class AuthResponseDto { 
    @ApiProperty({default: "success"})
    message: string;

    @ApiProperty({default: 200})
    statusCode: number
}  