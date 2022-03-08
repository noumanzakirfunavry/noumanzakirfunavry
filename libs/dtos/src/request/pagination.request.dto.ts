import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNumber, Min } from "class-validator";

export class PaginatedRequestDto {
    @ApiProperty({description:'The limit of items returned, cannot be negative',example:10,minimum:0,type:Number})
    @IsNumber()
    @Min(1)
    @Type(() => Number)
    limit: number;
  
    @ApiProperty({description:'The Offset of items to get, cannot be negative, on the frontend should be caluclated as `limit + offset`',example:0,minimum:0,type:Number})
    @IsNumber()
    @Min(1)
    @Type(() => Number)
    pageNo: number;
  }