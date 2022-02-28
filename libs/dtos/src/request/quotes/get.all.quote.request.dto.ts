import { IsNotEmpty, IsString } from "class-validator";
import { PaginatedRequestDto } from "../pagination.request.dto";

export class GetAllQuotesRequestDto extends PaginatedRequestDto{
    @IsNotEmpty()
    @IsString()
    name:string
}