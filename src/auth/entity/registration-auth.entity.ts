import { ApiProperty } from "@nestjs/swagger"
import { User } from "@prisma/client";

export class RegiserUserDto {
    @ApiProperty({ required: true })
    success: boolean;
    @ApiProperty({ required: true })
    message: boolean;
    @ApiProperty({ required: false })
    data?: User;

}