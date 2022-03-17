import { IsArray, IsNotEmpty } from "class-validator";

export class DeleteJobRequestDto{
    @IsNotEmpty()
    @IsArray()
    ids:number[]
}