import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class AddCategoriesRequestDto{
    
    @IsNotEmpty()
    @IsString()
    title:string

    @IsOptional()
    @IsNumber()
    parentCategoryId:number

    @IsNotEmpty()
    @IsBoolean()
    isActive:boolean
    
    @IsNotEmpty()
    @IsBoolean()
    displayInCategoryMenu:boolean

    @IsNotEmpty()
    @IsBoolean()
    displayInHomePage:boolean
    
}