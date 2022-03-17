import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString, IsUrl } from "class-validator"

export class UpdateBreakingNewsRequestDto{
    
    @IsOptional()
    @IsString()
    title:string
    @IsOptional()
    @IsUrl()
    newsLink:string 
    @IsOptional()
    @IsNumber()
    newsId: number
    @IsOptional()
    @IsBoolean()
    isActive:boolean
    @IsOptional()
    @IsBoolean()
    isPushNotificationActive : boolean
    @IsOptional()
    @IsBoolean()
    IsTwitterActive : boolean
    @IsOptional()
    @IsBoolean()
    isFacebookActive : boolean
}