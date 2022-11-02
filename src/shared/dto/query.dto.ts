import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNumber, IsOptional } from "class-validator";

export class QueryLimitDto {
    @IsOptional()
    @IsNumber()
    @ApiProperty({ default: 0, required: false })
    skip: number;

    @IsOptional()
    @IsNumber()
    @ApiProperty({ default: 50, required: false })
    take: number;
}

export class QueryOrderDto {
    @IsOptional()
    @ApiProperty({ required: false, default: "id" })
    orderBy: string;

    @IsOptional()
    @ApiProperty({ required: false, default: "asc", enum: ["asc", "desc"] })
    sortOrder: string;
}

export class QueryDto {
    @IsOptional()
    @IsNumber()
    @ApiProperty({ default: 0, required: false })
    skip: number;

    @IsOptional()
    @IsNumber()
    @ApiProperty({ default: 50, required: false })
    take: number;

    @IsOptional()
    @ApiProperty({ required: false, default: "id" })
    orderBy: string;

    @IsOptional()
    @ApiProperty({ required: false, default: "asc", enum: ["asc", "desc"] })
    sortOrder: string;

    @IsOptional()
    @ApiProperty({ required: false })
    contains: string;
}


export class QueryTimeDto extends QueryDto {
    @IsOptional()
    @IsDate()
    @ApiProperty({ default: new Date("2021-10-15T00:00:00.000Z"), required: false })
    fromDate: Date;

    @IsOptional()
    @IsDate()
    @ApiProperty({ default: new Date("2022-10-15T00:00:00.000Z"), required: false })
    toDate: Date;
}