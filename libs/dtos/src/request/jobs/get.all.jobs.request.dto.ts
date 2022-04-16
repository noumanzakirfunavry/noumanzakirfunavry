import { IsBooleanString, IsNotEmpty, IsNumberString, IsOptional, IsString } from "class-validator";
import { PaginatedRequestDto } from "../pagination.request.dto";


export class GetALLJobsRequestDto extends PaginatedRequestDto{

    @IsNotEmpty()
    @IsBooleanString()
    @IsOptional()
    status:boolean

    @IsOptional()
    branchId:number[]

    @IsOptional()
		@IsNumberString()
    publisher: number

    @IsOptional()
    @IsString()
    title:string
    
}