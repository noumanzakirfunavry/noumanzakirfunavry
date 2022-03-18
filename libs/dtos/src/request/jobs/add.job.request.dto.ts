import { IsArray, IsBoolean, IsBooleanString, IsDate, IsDateString, IsNotEmpty, IsNumber, IsString } from "class-validator"

export class AddJobRequestDto{
    
    
    @IsNotEmpty()
    @IsString()
    title:string
    
    @IsNotEmpty()
    @IsNumber()
    totalOpenings:1

    @IsNotEmpty()
    @IsNumber()
    branchId:number

    @IsNotEmpty()
    @IsBoolean()
    isActive:boolean

    @IsNotEmpty()
    @IsDateString()
    closingDate:Date

    @IsNotEmpty()
    @IsString()
    description:string

    @IsNotEmpty()
    @IsArray()
    departments:number[]
}