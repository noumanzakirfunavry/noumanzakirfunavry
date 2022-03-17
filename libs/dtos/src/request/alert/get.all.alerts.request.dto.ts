import { IsNotEmpty, IsNumberString, IsOptional } from "class-validator";

export class GetAlertsRequestDto {
    @IsNotEmpty()
    @IsNumberString()
    limit: number

    @IsNotEmpty()
    @IsNumberString()
    pageNo: number

    @IsOptional()
    search: string

    @IsOptional()
    needToSend: boolean

}