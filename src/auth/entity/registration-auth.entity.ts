import { ApiProperty } from "@nestjs/swagger"
import { UserEntity } from "src/users/entity/user.entity";

export class RegiserSuccessDto {
    @ApiProperty({ default: true })
    success: boolean;
    @ApiProperty({ default:"ACCOUNT_CREATION_SUCCESS"})
    message: boolean;
    @ApiProperty({ required: false })
    data: UserEntity;
}

export class RegiserFailureDto {
    @ApiProperty({default: 400})
    statusCode: number

    @ApiProperty({ default: false })
    success: boolean;
    
    @ApiProperty({ default:"ACCOUNT_CREATION_FAILED"})
    message: boolean;

    @ApiProperty({ required: false })
    error: string;

}
