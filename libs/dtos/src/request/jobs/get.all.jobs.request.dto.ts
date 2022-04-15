import { IsBooleanString ,IsNotEmpty,IsNumber,IsOptional, IsString } from "class-validator";
import { PaginatedRequestDto } from "../pagination.request.dto";


export class GetALLJobsRequestDto extends PaginatedRequestDto{

    @IsNotEmpty()
    @IsBooleanString()
    @IsOptional()
    status:boolean

    @IsOptional()
    branchId:number[]

    @IsOptional()
		@IsNumber()
    publisher: number

    @IsOptional()
    @IsString()
    title:string
    
}