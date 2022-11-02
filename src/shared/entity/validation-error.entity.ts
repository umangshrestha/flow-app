import { ApiProperty } from "@nestjs/swagger";
import { ErrorEntity } from "./error.entity";

export class ValidationErrorEntity extends ErrorEntity {
    @ApiProperty()
    message: string[];

    @ApiProperty({default: 502, required: true})
    statusCode: number
}