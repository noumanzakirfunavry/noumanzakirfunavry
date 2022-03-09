import { IsOptional, IsString } from "class-validator";
import { PaginatedRequestDto } from "../pagination.request.dto";

export class GetAllQuickLinksRequestDto extends PaginatedRequestDto{

    @IsOptional()
    @IsString()
    name:string
}