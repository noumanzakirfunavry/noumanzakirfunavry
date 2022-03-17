import { ArrayNotEmpty, IsArray, IsNotEmpty, IsNumber, Min } from "class-validator";

export class UpdateUserRightsRequestDto{
    @IsNotEmpty()
    @IsArray()
    @ArrayNotEmpty()
    rights : []
}