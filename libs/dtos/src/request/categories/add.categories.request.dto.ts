import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class AddCategoriesRequestDto{
    
    @IsNotEmpty()
    @IsString()
    title:string

    @IsNotEmpty()
    @IsNumber()
    parentCategoryId:number

    @IsNotEmpty()
    @IsBoolean()
    isActive:Boolean
    
    @IsNotEmpty()
    @IsBoolean()
    displayInCategoryMenu:boolean

    @IsNotEmpty()
    @IsBoolean()
    displayInHomePage:boolean
    
}