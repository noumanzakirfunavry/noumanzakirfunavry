import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator"

export class UpdateTagRequestDto{

    @IsNotEmpty()
    @IsNumber()
    id:number

    @IsNotEmpty()
    @IsString()
    title:string

    @IsNotEmpty()
    @IsBoolean()
    isActive:boolean
}