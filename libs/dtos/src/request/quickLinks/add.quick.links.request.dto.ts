import { IsBoolean, IsNotEmpty, IsNumber, IsString, IsUrl } from "class-validator";

export class AddQuickLinksRequestDto{
    @IsNotEmpty()
    @IsString()
    title:string

    @IsNotEmpty()
    @IsUrl()
    url:string
    
    @IsNotEmpty()
    @IsNumber()
    position:number
    
    @IsNotEmpty()
    @IsBoolean()
    visible:boolean
}