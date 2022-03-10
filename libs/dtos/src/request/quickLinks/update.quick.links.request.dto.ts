import { IsBoolean, IsNumber, IsOptional, IsString, IsUrl } from "class-validator";

export class UpdateQuickLinksRequestDto{
    @IsOptional()
    @IsString()
    title:string

    @IsOptional()
    @IsUrl()
    url:string
    
    @IsOptional()
    @IsNumber()
    position:number
    
    @IsOptional()
    @IsBoolean()
    visible:boolean
}