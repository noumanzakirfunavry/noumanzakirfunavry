import { IsNotEmpty, IsString } from "class-validator";

export class ResetPasswordRequestDto{
    @IsNotEmpty()
    @IsString()
    password : string
}