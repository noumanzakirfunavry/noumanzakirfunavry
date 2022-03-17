import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString, IsUrl } from "class-validator";

export class AddQuickLinksRequestDto{
    @IsNotEmpty()
    @IsString()
    title:string

    @IsNotEmpty()
    @IsUrl()
    url:string
    
    @IsOptional()
    @IsNumber()
    position:number
    
    @IsNotEmpty()
    @IsBoolean()
    visible:boolean
}