import { IsNotEmpty, IsNumber, IsNumberString, IsOptional } from "class-validator";

export class GetAllMessagesRequestDto{
    @IsNotEmpty()
    @IsNumberString()
    limit : number

    @IsNotEmpty()
    @IsNumberString()
    pageNo: number

    @IsOptional()
    search : string

}