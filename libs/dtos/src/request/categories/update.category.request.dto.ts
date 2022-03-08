import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator"

export class UpdateCategoriesRequestDto{
       
    @IsNotEmpty()
    @IsNumber()
    id:number

    @IsOptional()
    @IsString()
    title:string

    @IsOptional()
    @IsNumber()
    parentCategoryId:number

    @IsOptional()
    @IsBoolean()
    isActive:Boolean
    
    @IsOptional()
    @IsBoolean()
    displayInCategoryMenu:boolean

    @IsOptional()
    @IsBoolean()
    displayInHomePage:boolean
}