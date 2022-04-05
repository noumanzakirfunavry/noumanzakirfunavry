import { IsBooleanString, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { PaginatedRequestDto } from "../pagination.request.dto";

export class GetAllQuickLinksRequestDto extends PaginatedRequestDto{

    @IsOptional()
    search:string

    @IsNotEmpty()
    @IsBooleanString()
    @IsOptional()
    isActive : boolean
}