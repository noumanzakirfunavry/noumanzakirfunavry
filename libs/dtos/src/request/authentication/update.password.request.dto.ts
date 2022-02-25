import { IsNotEmpty, IsString } from "class-validator";

export class UpdatePasswordRequestDto{

    @IsNotEmpty()
    @IsString()
    password : string

    @IsNotEmpty()
    @IsString()
    oldPassword : string
}