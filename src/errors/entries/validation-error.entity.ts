import { ApiProperty } from "@nestjs/swagger";
import { ErrorEntity } from "./error.entity";

export class ValidationErrorEntity extends ErrorEntity {
    @ApiProperty()
    message: string[];
}