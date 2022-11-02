import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNumber, IsOptional } from "class-validator";

export class QueryLimitDto {
    @IsOptional()
    @IsNumber()
    @ApiProperty({ default: 0, required: false })
    skip: number = 0;

    @IsOptional()
    @IsNumber()
    @ApiProperty({ default: 50, required: false })
    take: number = 50;
}

export class QueryOrderDto extends QueryLimitDto{
    @IsOptional()
    @ApiProperty({ required: false, default: "id" })
    orderBy: string = "id";

    @IsOptional()
    @ApiProperty({ required: false, default: "asc", enum: ["asc", "desc"] })
    sortOrder: string = "asc";
}

export class QueryDto extends QueryOrderDto{
    @IsOptional()
    @ApiProperty({ required: false })
    contains: string;
}


const DateOneYearAgo = new Date();
DateOneYearAgo.setFullYear(DateOneYearAgo.getDate() - 1);

export class QueryTimeDto extends QueryDto {
    @IsOptional()
    @IsDate()
    @ApiProperty({default: DateOneYearAgo, required: false })
    fromDate: Date = DateOneYearAgo;

    @IsOptional()
    @IsDate()
    @ApiProperty({required: false })
    toDate: Date;
}