import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { PaginatedRequestDto } from "../pagination.request.dto";


export class GetALLJobsRequestDto extends PaginatedRequestDto{

    @IsOptional()
    @IsBoolean()
    status:Boolean

    @IsOptional()
    @IsNumber()
    branchId:number[]

    @IsOptional()
    @IsNumber()
    publishers:number[]

    @IsOptional()
    @IsString()
    title:string
    
}