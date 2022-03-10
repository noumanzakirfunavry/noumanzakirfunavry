import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator"

export class UpdateCategoriesRequestDto{
       

    @IsOptional()
    @IsString()
    title:string

    @IsOptional()
    @IsNumber()
    parentCategoryId:number

    @IsOptional()
    @IsBoolean()
    isActive:boolean
    
    @IsOptional()
    @IsBoolean()
    displayInCategoryMenu:boolean

    @IsOptional()
    @IsBoolean()
    displayInHomePage:boolean
}