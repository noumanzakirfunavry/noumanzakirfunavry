import { IsBoolean, IsNotEmpty, IsNumber, IsString, IsUrl } from "class-validator"

export class AddBreakingNewsRequestDto{

        @IsNotEmpty()
        @IsString()
        title:string
        @IsNotEmpty()
        @IsUrl()
        newsLink:string 
        @IsNotEmpty()
        @IsNumber()
        newsId: number
        @IsNotEmpty()
        @IsBoolean()
        isActive:boolean
        @IsNotEmpty()
        @IsBoolean()
        isPushNotificationActive : boolean
        @IsNotEmpty()
        @IsBoolean()
        IsTwitterActive : boolean
        @IsNotEmpty()
        @IsBoolean()
        isFacebookActive : boolean
        
}