import { IsBooleanString, IsNotEmpty, IsOptional } from "class-validator";
import { PaginatedRequestDto } from "../pagination.request.dto";

export class GetAllCategoriesForClientRequestDto extends PaginatedRequestDto{
    @IsNotEmpty()
    @IsBooleanString()
    @IsOptional()
    displayInHomePage : boolean


    @IsNotEmpty()
    @IsBooleanString()
    @IsOptional()
    displayInCategoryMenu : boolean
}