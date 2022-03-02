import { ArrayNotEmpty, IsArray, IsNotEmpty, IsNumber, Min } from "class-validator";

export class UpdateUserRightsRequestDto{
    @IsNotEmpty()
    @IsNumber()
    @Min(1)
    userId : number

    @IsNotEmpty()
    @IsArray()
    @ArrayNotEmpty()
    rights : []
}