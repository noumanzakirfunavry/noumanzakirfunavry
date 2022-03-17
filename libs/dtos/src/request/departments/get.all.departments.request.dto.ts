import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import { PaginatedRequestDto } from "../pagination.request.dto";

export class GetAllDepartmentsRequestDto extends PaginatedRequestDto{
    @IsOptional()
    @IsString()
    name:string
}