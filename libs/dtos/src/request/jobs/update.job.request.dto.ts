import { IsBoolean, IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class UpdateJobRequestDto{
    
    @IsNotEmpty()
    @IsNumber()
    id:number

    @IsOptional()
    @IsString()
    title:string

    @IsOptional()
    @IsNumber()
    totalOpenings:number

    @IsOptional()
    @IsNumber()
    branchId:number

    @IsOptional()
    @IsBoolean()
    isActive:boolean

    @IsOptional()
    @IsDateString()
    closingDate:Date
    
    @IsOptional()
    @IsString()
    description:string
    
    @IsOptional()
    departments:number[]
}