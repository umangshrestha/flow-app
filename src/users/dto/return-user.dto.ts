import { ApiProperty } from "@nestjs/swagger";

export class ReturnUserDto{
    @ApiProperty()
    id: number
    @ApiProperty()
    firstName: string;
    @ApiProperty()
    lastName: string;
    @ApiProperty()
    email: string;
}


