import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateMessageRequestDto {
    @IsNotEmpty()
    @IsString()
    subject: string

    @IsNotEmpty()
    @IsString()
    message: string

    @IsNotEmpty()
    @IsEmail()
    email: string

    @IsNotEmpty()
    @IsString()
    phoneNo: string

    @IsNotEmpty()
    @IsNumber()
    messageTypeId: number

}